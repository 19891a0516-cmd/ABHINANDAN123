'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { stages } from '@/lib/data';
import SceneErrorBoundary from '@/components/three/SceneErrorBoundary';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section id="home" className="relative overflow-hidden bg-white px-6 pb-24 pt-20 dark:bg-[#0A0A0A] lg:px-10 lg:pt-28">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#DED8ED] bg-[#F8F5FC] px-4 py-2 mb-8 dark:border-[#393044] dark:bg-[#15121D]"
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink to-purple" />
          <span className="text-sm font-semibold text-[#6D35D9] dark:text-[#C4A7FF]">
            Explainable temporal AI
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display max-w-4xl mb-6 font-extrabold tracking-[-0.04em] leading-[0.99] text-[clamp(3rem,7.2vw,6rem)] text-[#101A3A] dark:text-[#F5F3FA]"
        >
          See the change.
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(105deg, #E83E9F, #6D35D9)' }}>
            Shape what happens next.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mb-8 text-lg leading-relaxed font-medium text-[#697386] sm:text-xl dark:text-[#B4B7C5]"
        >
          A change in behaviour rarely happens in isolation. RadarSeq connects the dots across your data to show where risk is building, what has changed and which cases deserve attention.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="focus-ring group inline-flex min-h-[64px] w-full max-w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-center text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:px-9 sm:text-lg"
            style={{
              backgroundImage: 'linear-gradient(105deg, #E83E9F, #6D35D9)',
              boxShadow: '0 10px 28px rgba(180, 57, 174, 0.25)',
            }}
          >
            Discuss your use case <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href="#demos" className="rounded-full px-4 py-3 text-sm font-bold text-ink/75 underline decoration-pink/60 underline-offset-4 transition-colors hover:text-pink focus-ring">
            Explore the demonstration
          </a>
          <p className="text-sm font-medium text-[#697386] dark:text-[#B4B7C5]">
            Your data. A clear use case. A practical route forward.
          </p>
        </motion.div>

        {/* Risk Stages - Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 pb-14 border-b border-border/40"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-4">Illustrative risk stages</p>
          <div className="flex flex-wrap gap-2.5">
            {stages.map((s, i) => (
              <motion.button
                key={s.name}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
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
          <p className="mt-4 max-w-xl text-sm text-ink/60" aria-live="polite">
            {stages[active].name}: {stages[active].description}
          </p>
        </motion.div>

        {/* Trust Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-8"
        >
          <div className="flex flex-col">
            <div className="text-xs font-mono uppercase tracking-widest text-pink mb-2">RadarSeq v1</div>
            <div className="font-display font-bold text-ink text-lg">CNN + BiLSTM</div>
            <p className="text-sm text-ink/50 mt-1">Radar-chart image sequences</p>
          </div>
          <div className="flex flex-col">
            <div className="text-xs font-mono uppercase tracking-widest text-purple mb-2">RadarSeq++</div>
            <div className="font-display font-bold text-ink text-lg">Direct feature sequences</div>
            <p className="text-sm text-ink/50 mt-1">State-space and attention research</p>
          </div>
          <div className="flex flex-col">
            <div className="text-xs font-mono uppercase tracking-widest text-accent-teal mb-2">Risk journey</div>
            <div className="font-display font-bold text-ink text-lg">Five illustrative stages</div>
            <p className="text-sm text-ink/50 mt-1">Human review remains central</p>
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
        <div className="relative h-[500px] overflow-hidden rounded-3xl border border-border/60 bg-[radial-gradient(ellipse_at_55%_45%,rgba(91,75,255,0.24),transparent_58%),linear-gradient(145deg,#101A3A,#090B14)] shadow-2xl">
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#090B14]/80 via-[#101A3A]/45 to-[#090B14]/85" />

          {/* Background gradient overlay */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-br from-pink/10 via-purple/5 to-transparent pointer-events-none" />
          
          {/* 3D Scene Container */}
          <div className="absolute inset-0 z-10 w-full h-full">
            <SceneErrorBoundary fallback={
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101A3A]/10 to-[#090B14]/25" />
            }>
              <HeroScene activeStageIndex={active} />
            </SceneErrorBoundary>
          </div>

          <div className="pointer-events-none absolute left-6 top-4 z-20 flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white/75">
            <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
            CONCEPTUAL SIGNAL OBSERVATORY
          </div>
          <p className="pointer-events-none absolute bottom-4 right-5 z-20 max-w-xs text-right text-xs text-white/65">
            Conceptual visualisation. No live model or customer data.
          </p>
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
            <div className="text-2xl font-display font-bold text-pink mb-2">01</div>
            <div className="text-sm font-semibold text-ink">Connect histories</div>
            <p className="text-xs text-ink/50 mt-2">Relevant activity and operational records</p>
          </div>
          <div className="bg-gradient-to-br from-purple/5 to-transparent border border-border/40 rounded-xl p-6">
            <div className="text-2xl font-display font-bold text-purple mb-2">02</div>
            <div className="text-sm font-semibold text-ink">Study trajectories</div>
            <p className="text-xs text-ink/50 mt-2">Evaluate temporal patterns against a baseline</p>
          </div>
          <div className="bg-gradient-to-br from-accent-teal/5 to-transparent border border-border/40 rounded-xl p-6">
            <div className="text-2xl font-display font-bold text-accent-teal mb-2">03</div>
            <div className="text-sm font-semibold text-ink">Review evidence</div>
            <p className="text-xs text-ink/50 mt-2">Support human decisions with context</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
