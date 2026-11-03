import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 z-10">
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
            04 / Career Journey & Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Experience & <span className="text-gradient-cyan-purple">Milestones</span>.
          </motion.h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A chronological timeline of roles where I've delivered scalable code and high-impact digital experiences.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-12 my-8">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#07080d] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(0,245,212,0.8)]" />

              {/* Card Container */}
              <div className="p-7 rounded-3xl glass-panel hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400 font-mono">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {job.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                  {job.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {job.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, eIdx) => (
              <motion.div
                key={eIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-white text-base sm:text-lg mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-mono text-purple-400 mb-2">
                    {edu.institution} • {edu.period}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

