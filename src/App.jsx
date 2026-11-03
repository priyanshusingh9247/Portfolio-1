import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setCursorHovered(true);
      } else {
        setCursorHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080d] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Interactive Custom Mouse Follower Glow */}
      <div
        className="pointer-events-none fixed z-30 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${mousePosition.x - 16}px, ${mousePosition.y - 16}px, 0)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            cursorHovered
              ? 'w-10 h-10 -ml-2 -mt-2 bg-cyan-400/20 border border-cyan-400/60 shadow-[0_0_20px_rgba(0,245,212,0.6)]'
              : 'w-8 h-8 bg-cyan-400/10 border border-cyan-400/30'
          }`}
        />
      </div>

      {/* 3D WebGL Background Layer */}
      <ThreeCanvas />

      {/* Cyber Grid Pattern Overlay with Vignette */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40 z-0"></div>
      
      {/* Ambient Radial Lights */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] radial-glow-cyan pointer-events-none z-0 blur-3xl opacity-60"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] radial-glow-purple pointer-events-none z-0 blur-3xl opacity-60"></div>

      {/* Foreground Content Structure */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}

