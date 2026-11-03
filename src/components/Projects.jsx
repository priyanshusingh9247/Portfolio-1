import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, X, ArrowUpRight, Code, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Interactive 3D / WebGL', 'Full Stack / AI', 'Systems / Fintech'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedFilter.toLowerCase().split(' ')[0]));

  const getAccentBorder = (accent) => {
    switch (accent) {
      case 'cyan': return 'hover:border-cyan-500/50 hover:shadow-cyan-500/10';
      case 'purple': return 'hover:border-purple-500/50 hover:shadow-purple-500/10';
      case 'magenta': return 'hover:border-pink-500/50 hover:shadow-pink-500/10';
      case 'blue': return 'hover:border-blue-500/50 hover:shadow-blue-500/10';
      default: return 'hover:border-cyan-500/50';
    }
  };

  const getAccentBadge = (accent) => {
    switch (accent) {
      case 'cyan': return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'purple': return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'magenta': return 'bg-pink-500/10 text-pink-300 border-pink-500/30';
      case 'blue': return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      default: return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
    }
  };

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2"
            >
              <span className="w-8 h-[1px] bg-cyan-400"></span>
              03 / Selected Case Studies
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white"
            >
              Featured <span className="text-gradient-cyan-purple">Creations</span>.
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  selectedFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-md'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative rounded-3xl p-7 bg-white/[0.02] border border-white/10 transition-all duration-300 backdrop-blur-md flex flex-col justify-between hover:-translate-y-1.5 shadow-xl ${getAccentBorder(
                  project.accent
                )}`}
              >
                <div>
                  {/* Top Header: Category & Metric */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${getAccentBadge(project.accent)}`}>
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.stats}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Deep Dive</span>
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 transition-colors font-sans font-medium"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal: Deep Dive into Project */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[#0d101d] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="space-y-4">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${getAccentBadge(activeModalProject.accent)}`}>
                    {activeModalProject.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {activeModalProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.longDescription}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      Key Highlights & Architecture
                    </p>
                    <p className="text-xs text-slate-300 font-mono">
                      {activeModalProject.stats}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-slate-400 mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-cyan-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-display font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all"
                    >
                      <span>Launch Live Experience</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

