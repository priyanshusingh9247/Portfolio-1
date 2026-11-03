import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Hero Text & Actions */}
        <div className="lg:col-span-8 flex flex-col items-start space-y-6">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-mono font-medium text-cyan-300">
              {personal.badge}
            </span>
          </motion.div>

          {/* Main Title & Headline */}
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm md:text-base font-mono text-cyan-400 uppercase tracking-widest"
            >
              Hi, I'm {personal.name}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              Crafting <span className="text-gradient-cyan-purple">Interactive</span> 3D & Web Systems.
            </motion.h1>
          </div>

          {/* Subtitle / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <Sparkles className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-display font-semibold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 active:scale-95 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <Terminal className="w-4 h-4 text-cyan-400" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full border-t border-white/10"
          >
            {stats.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <p className="font-display text-2xl font-bold text-white tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D showcase spotlight overlay */}
        <div className="lg:col-span-4 flex flex-col items-end justify-center pointer-events-none hidden lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-cyan-500/20 max-w-xs text-right shadow-2xl"
          >
            <p className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider">
              REAL-TIME WEBGL SCENE
            </p>
            <p className="text-xs text-slate-300 mt-1 leading-normal">
              Interactive 3D geometry rendered dynamically with Three.js. Move cursor or drag to interact.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border border-slate-700 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

