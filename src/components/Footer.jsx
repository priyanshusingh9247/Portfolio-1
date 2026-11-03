import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 border-t border-white/5 z-10 bg-[#06070a]/90 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name & Year */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="font-display font-semibold text-white text-sm">
            {personal.name} <span className="text-cyan-400">©</span> {new Date().getFullYear()}
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Crafted with React, Three.js, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Center: System Status */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>All systems operational</span>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all flex items-center gap-2 text-xs font-mono group"
          title="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}

