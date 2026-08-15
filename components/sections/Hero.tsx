'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { stages } from '@/lib/data';
import SceneErrorBoundary from '@/components/three/SceneErrorBoundary';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % stages.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative pt-20 lg:pt-28 pb-32 px-6 lg:px-10 bg-bg overflow-hidden">
      {/* Premium gradient backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-accent-purple/20 via-pink/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-l from-accent-purple/25 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink/10 to-purple/10 border border-pink/20 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink to-purple" />
          <span className="text-sm font-semibold text-ink/80">Temporal AI for enterprise risk intelligence</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold tracking-[-0.04em] leading-[1.08] text-[52px] sm:text-[64px] lg:text-[76px] max-w-4xl mb-6 text-ink"
        >
          Detect risk signals 2x faster with temporal AI.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg lg:text-xl text-ink/65 max-w-2xl mb-10 leading-relaxed font-medium"
        >
          RadarSeq fuses temporal AI, portfolio analytics, and audit-first explainability into one decision layer. See what others miss, act with confidence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-start mb-14"
        >
          <a href="#contact" className="btn-pill btn-primary focus-ring inline-flex items-center gap-2 group">
            Book a strategic briefing
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-ink/50 pt-3 font-medium">No credit card required · 15 min consultation</p>
        </motion.div>

        {/* Risk Stages - Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 pb-14 border-b border-border/40"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-4">Risk Stages:</p>
          <div className="flex flex-wrap gap-2.5">
            {stages.map((s, i) => (
              <motion.button
                key={s.name}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 focus-ring border backdrop-blur-sm"
                style={
                  active === i
                    ? { 
                        background: `${s.color}20`, 
                        color: s.color, 
                        borderColor: s.color,
                        boxShadow: `0 0 20px ${s.color}30`
                      }
                    : { 
                        background: 'rgba(255,255,255,0.02)', 
                        color: '#888',
                        borderColor: 'rgba(255,255,255,0.08)'
                      }
                }
              >
                {s.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Trust Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-8"
        >
          <div className="flex flex-col">
            <div className="text-xs font-mono uppercase tracking-widest text-pink mb-2">Research Credibility</div>
            <div className="font-display font-bold text-ink text-lg">ACM/Springer 2025</div>
            <p className="text-sm text-ink/50 mt-1">Academic-grade AI model</p>
          </div>
          <div className="flex flex-col">
            <div className="text-xs font-mono uppercase tracking-widest text-purple mb-2">Enterprise Ready</div>
            <div className="font-display font-bold text-ink text-lg">99.9% Uptime SLA</div>
            <p className="text-sm text-ink/50 mt-1">Scalable deployment model</p>
          </div>
          <div className="flex flex-col">
            <div className="text-xs font-mono uppercase tracking-widest text-accent-teal mb-2">Transparency</div>
            <div className="font-display font-bold text-ink text-lg">Full Audit Trail</div>
            <p className="text-sm text-ink/50 mt-1">Explainable by design</p>
          </div>
        </motion.div>
      </div>

      {/* 3D Scene - Large Hero Visual */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-20 lg:mt-28 relative max-w-6xl mx-auto"
      >
        <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-b from-ink/60 via-ink/40 to-ink/20 border border-border/60 shadow-2xl">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink/5 via-purple/5 to-transparent pointer-events-none z-0" />
          
          {/* 3D Scene Container */}
          <div className="absolute inset-0 w-full h-full">
            <SceneErrorBoundary fallback={
              <div className="absolute inset-0 bg-gradient-to-b from-pink/10 via-purple/10 to-transparent flex flex-col items-center justify-center z-10 backdrop-blur-sm">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-ink mb-2">⚡ LIVE RISK RADAR</div>
                  <div className="text-sm text-ink/60">3D Scene Loading...</div>
                </div>
              </div>
            }>
              <HeroScene />
            </SceneErrorBoundary>
          </div>

          {/* Corner label */}
          <div className="absolute top-4 left-6 text-xs font-mono font-bold text-ink/60 tracking-wider pointer-events-none z-20 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
            LIVE RISK RADAR
          </div>
        </div>

        {/* Stats below scene */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 grid sm:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-pink/5 to-transparent border border-border/40 rounded-xl p-6">
            <div className="text-2xl font-display font-bold text-pink mb-2">2x</div>
            <div className="text-sm font-semibold text-ink">Risk Detection Speed</div>
            <p className="text-xs text-ink/50 mt-2">Faster than snapshot-based models</p>
          </div>
          <div className="bg-gradient-to-br from-purple/5 to-transparent border border-border/40 rounded-xl p-6">
            <div className="text-2xl font-display font-bold text-purple mb-2">360°</div>
            <div className="text-sm font-semibold text-ink">Portfolio Visibility</div>
            <p className="text-xs text-ink/50 mt-2">Multi-source signal fusion</p>
          </div>
          <div className="bg-gradient-to-br from-accent-teal/5 to-transparent border border-border/40 rounded-xl p-6">
            <div className="text-2xl font-display font-bold text-accent-teal mb-2">95%+</div>
            <div className="text-sm font-semibold text-ink">Decision Clarity</div>
            <p className="text-xs text-ink/50 mt-2">Audit-first explainability</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
