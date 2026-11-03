import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);
  const [activePreset, setActivePreset] = useState('crystal'); // 'crystal', 'torus', 'waves'
  const [isInteracting, setIsInteracting] = useState(false);
  const presetRef = useRef(activePreset);

  useEffect(() => {
    presetRef.current = activePreset;
  }, [activePreset]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Groups
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- Object 1: Holographic Cyber Crystal ---
    const crystalGroup = new THREE.Group();
    const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x00f5d4,
      wireframe: true,
      emissive: 0x00f5d4,
      emissiveIntensity: 0.25,
      roughness: 0.2,
      metalness: 0.9,
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    crystalGroup.add(icosahedron);

    // Inner glowing core
    const innerGeo = new THREE.OctahedronGeometry(0.8, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x7b2cbf,
      emissive: 0x7b2cbf,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.8,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    crystalGroup.add(innerCore);

    // Surrounding orbital rings
    const ringGeo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    crystalGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    crystalGroup.add(ring2);

    masterGroup.add(crystalGroup);

    // --- Object 2: Cyber Torus Knot ---
    const torusGroup = new THREE.Group();
    const torusGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 120, 20, 2, 3);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x7b2cbf,
      wireframe: true,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.8,
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    torusGroup.add(torusKnot);
    torusGroup.visible = false;
    masterGroup.add(torusGroup);

    // --- Object 3: Deep Particle Starfield & Constellation Grid ---
    const particlesCount = 900;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    const colorCyan = new THREE.Color('#00f5d4');
    const colorPurple = new THREE.Color('#7b2cbf');
    const colorBlue = new THREE.Color('#38bdf8');

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 18;
      posArray[i + 1] = (Math.random() - 0.5) * 18;
      posArray[i + 2] = (Math.random() - 0.5) * 16 - 2;

      // Random gradient colors
      const rand = Math.random();
      let chosenColor = colorCyan;
      if (rand > 0.6) chosenColor = colorPurple;
      else if (rand > 0.3) chosenColor = colorBlue;

      colorArray[i] = chosenColor.r;
      colorArray[i + 1] = chosenColor.g;
      colorArray[i + 2] = chosenColor.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleMesh);

    // --- Interactive Shockwave / Ripple Ring ---
    const waveRingGeo = new THREE.RingGeometry(0.1, 0.15, 64);
    const waveRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f5d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
    });
    const waveRing = new THREE.Mesh(waveRingGeo, waveRingMat);
    scene.add(waveRing);
    let waveExpanding = false;
    let waveScale = 1;
    let waveOpacity = 0;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f5d4, 3, 20);
    pointLight1.position.set(4, 3, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7b2cbf, 4, 20);
    pointLight2.position.set(-4, -3, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xf72585, 2, 20);
    pointLight3.position.set(0, 5, -2);
    scene.add(pointLight3);

    // --- Mouse & Scroll Tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerPosition.x;
        const deltaY = e.clientY - previousPointerPosition.y;
        dragVelocity.x = deltaX * 0.005;
        dragVelocity.y = deltaY * 0.005;
        masterGroup.rotation.y += dragVelocity.x;
        masterGroup.rotation.x += dragVelocity.y;
      }
      previousPointerPosition = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handlePointerDown = (e) => {
      // Trigger wave pulse
      isDragging = true;
      setIsInteracting(true);
      previousPointerPosition = { x: e.clientX, y: e.clientY };

      // Shockwave trigger
      waveRing.position.set(targetMouseX * 2, -targetMouseY * 2, 1);
      waveScale = 0.5;
      waveOpacity = 0.9;
      waveExpanding = true;
    };

    const handlePointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 500);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // --- Resize handling ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // --- Animation loop ---
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp mouse & scroll
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Decelerate drag velocity
      if (!isDragging) {
        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;
        masterGroup.rotation.y += dragVelocity.x;
        masterGroup.rotation.x += dragVelocity.y;
      }

      // Visibility based on preset
      const current = presetRef.current;
      if (current === 'crystal') {
        crystalGroup.visible = true;
        torusGroup.visible = false;
        particleMesh.visible = true;
      } else if (current === 'torus') {
        crystalGroup.visible = false;
        torusGroup.visible = true;
        particleMesh.visible = true;
      } else if (current === 'waves') {
        crystalGroup.visible = false;
        torusGroup.visible = false;
        particleMesh.visible = true;
      }

      // Center geometry rotations & floating
      if (crystalGroup.visible) {
        icosahedron.rotation.y = elapsedTime * 0.35;
        icosahedron.rotation.x = elapsedTime * 0.2;
        innerCore.rotation.y = -elapsedTime * 0.6;
        innerCore.rotation.z = elapsedTime * 0.4;
        ring1.rotation.z = elapsedTime * 0.25;
        ring2.rotation.z = -elapsedTime * 0.2;
      }

      if (torusGroup.visible) {
        torusKnot.rotation.y = elapsedTime * 0.4;
        torusKnot.rotation.x = elapsedTime * 0.25;
      }

      // Scroll interaction: subtly morph position and camera angle
      const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      masterGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.15 - (scrollY * 0.0018);
      masterGroup.position.x = 1.3 - (scrollProgress * 2.6); // moves dynamically across screen as user scrolls!
      masterGroup.rotation.z = mouseX * 0.2 + (scrollProgress * Math.PI);

      // Camera parallax
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Starfield subtle rotation & wave
      particleMesh.rotation.y = elapsedTime * 0.03 + mouseX * 0.1;
      particleMesh.rotation.x = -elapsedTime * 0.02 + mouseY * 0.1;

      // Handle shockwave ring
      if (waveExpanding) {
        waveScale += 0.15;
        waveOpacity *= 0.94;
        waveRing.scale.set(waveScale, waveScale, waveScale);
        waveRingMat.opacity = waveOpacity;
        if (waveOpacity < 0.01) {
          waveExpanding = false;
        }
      }

      // Dynamic light orbits
      pointLight1.position.x = Math.sin(elapsedTime * 0.7) * 4;
      pointLight1.position.y = Math.cos(elapsedTime * 0.5) * 3;
      pointLight2.position.x = -Math.cos(elapsedTime * 0.6) * 4;
      pointLight2.position.z = Math.sin(elapsedTime * 0.4) * 3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      // Cleanup WebGL resources
      icoGeo.dispose();
      icoMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      waveRingGeo.dispose();
      waveRingMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing" 
        title="Click & Drag to rotate the 3D scene"
      />

      {/* Floating 3D Interaction Control Pill */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs shadow-2xl">
        <span className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px] pr-1 border-r border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          3D Core
        </span>
        <button
          onClick={() => setActivePreset('crystal')}
          className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
            activePreset === 'crystal'
              ? 'bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Crystal
        </button>
        <button
          onClick={() => setActivePreset('torus')}
          className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
            activePreset === 'torus'
              ? 'bg-purple-500/20 text-purple-300 font-medium border border-purple-500/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Knot
        </button>
        <button
          onClick={() => setActivePreset('waves')}
          className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
            activePreset === 'waves'
              ? 'bg-blue-500/20 text-blue-300 font-medium border border-blue-500/40'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Particles
        </button>
      </div>

      {/* Interactive Helper Indicator */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-500">
        <span className="inline-block px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800/60 text-slate-300">Drag</span>
        <span>to rotate 3D</span>
        <span className="text-slate-600">•</span>
        <span className="inline-block px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800/60 text-slate-300">Click</span>
        <span>for energy pulse</span>
      </div>
    </div>
  );
}

