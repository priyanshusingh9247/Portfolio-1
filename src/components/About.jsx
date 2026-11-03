import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe2, Compass, Layers, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const features = [
    {
      icon: <Globe2 className="w-5 h-5 text-cyan-400" />,
      title: "Interactive 3D & WebGL",
      desc: "Creating immersive browser-native 3D simulations, particle systems, and shader experiences that run at high framerates."
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: "Full-Stack Architecture",
      desc: "Building complete end-to-end architectures from responsive React frontends to robust microservices and real-time WebSockets."
    },
    {
      icon: <Zap className="w-5 h-5 text-pink-400" />,
      title: "Performance & DX First",
      desc: "Optimizing bundle sizes, rendering cycles, caching strategies, and SEO metrics to hit consistent 95+ Lighthouse scores."
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: "Scalable Systems & APIs",
      desc: "Designing resilient backend services, relational and document database schemas, and rock-solid deployment pipelines."
    }
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 z-10">
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
            01 / Identity & Philosophy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Engineering with <span className="text-gradient-cyan-purple">Precision & Artistry</span>.
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-panel space-y-5"
            >
              <h3 className="text-xl font-display font-semibold text-white">
                Who I Am
              </h3>
              {personal.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">📍</span>
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">🟢</span>
                  <span>Open for freelance & full-time</span>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 w-fit mb-3 group-hover:scale-110 transition-transform">
                    {feat.icon}
                  </div>
                  <h4 className="font-display font-semibold text-white text-base mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Terminal Profile */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 bg-[#0d101d]/90 shadow-2xl backdrop-blur-xl"
            >
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#080a12] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  priyanshu@devbox:~
                </div>
                <div className="w-12"></div>
              </div>

              {/* Terminal Code Snippet Body */}
              <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>❯</span>
                  <span className="text-white">neofetch --profile</span>
                </div>

                <div className="pt-2 pb-2 space-y-1.5 border-y border-white/5 text-[11px]">
                  <p className="flex justify-between">
                    <span className="text-slate-400">Developer:</span>
                    <span className="text-cyan-300 font-semibold">{personal.name}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">Handle / Brand:</span>
                    <span className="text-purple-300">Priyanshu Singh.Tech</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">Age:</span>
                    <span className="text-pink-300">20 Years Old</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">Education:</span>
                    <span className="text-amber-300">upGrad School of Technology</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">Core Tools:</span>
                    <span className="text-emerald-400">Python, HTML5, JavaScript, CSS3</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">3D Graphics:</span>
                    <span className="text-cyan-400">Three.js & WebGL</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">GitHub:</span>
                    <a href="https://github.com/priyanshusingh9247" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                      priyanshusingh9247
                    </a>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-300">Open for Internships & Projects</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-cyan-400 pt-2">
                  <span>❯</span>
                  <span className="text-white">git status</span>
                </div>
                <p className="text-emerald-400 text-[11px]">
                  On branch main. All systems optimal. Ready to deploy creative ideas.
                </p>

                <div className="flex items-center gap-1.5 text-slate-500 pt-1">
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

