import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { key: 'frontend', label: 'Frontend & 3D', icon: <Code2 className="w-4 h-4" /> },
    { key: 'backend', label: 'Backend & APIs', icon: <Server className="w-4 h-4" /> },
    { key: 'devops', label: 'Cloud & DevOps', icon: <Cloud className="w-4 h-4" /> },
  ];

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2"
          >
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            02 / Capabilities & Tooling
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Technical <span className="text-gradient-cyan-purple">Arsenal</span>.
          </motion.h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A comprehensive overview of the modern technologies, 3D graphics libraries, and infrastructure I leverage daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit backdrop-blur-md">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="space-y-6">
          <div className="p-8 rounded-3xl glass-panel relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2.5">
                  <span>{skills[activeTab].title}</span>
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  {skills[activeTab].description}
                </p>
              </div>

              {/* Skills List with Progress */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                {skills[activeTab].items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-display font-medium text-white text-sm group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-cyan-400 font-semibold">
                        {skill.level}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Grid Badges */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-3">
          {[
            "Three.js", "React 18", "Next.js", "WebGL", "TypeScript", 
            "TailwindCSS", "Framer Motion", "Node.js", "PostgreSQL", 
            "Docker", "AWS", "Git", "REST & GraphQL", "Vite"
          ].map((tag, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 hover:scale-105 transition-all cursor-default"
            >
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

