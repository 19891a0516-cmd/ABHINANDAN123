'use client';

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { stages } from '@/lib/data';
import SceneErrorBoundary from '@/components/three/SceneErrorBoundary';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="hero-3d-fallback absolute inset-0" aria-hidden="true" />,
});

const technologyTags = ['Temporal AI', 'BiLSTM', 'State-space'];

export default function Hero() {
  const [active, setActive] = useState(0);
  const ghostRef = useRef<HTMLSpanElement>(null);

  const updateReveal = (x: number, y: number) => {
    const ghost = ghostRef.current;
    if (!ghost) return;
    const bounds = ghost.getBoundingClientRect();
    ghost.style.setProperty('--reveal-x', `${x - bounds.left}px`);
    ghost.style.setProperty('--reveal-y', `${y - bounds.top}px`);
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const coarsePointer = window.matchMedia('(pointer: coarse)');
    let frame = 0;
    let removeResizeListener: (() => void) | null = null;

    const stopTouchReveal = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      removeResizeListener?.();
      removeResizeListener = null;
    };

    const startTouchReveal = () => {
      stopTouchReveal();
      const ghost = ghostRef.current;
      if (!coarsePointer.matches || reducedMotion.matches || !ghost) return;
      let width = ghost.getBoundingClientRect().width;
      let height = ghost.getBoundingClientRect().height;
      let lastPaint = 0;
      const updateSize = () => {
        const bounds = ghost.getBoundingClientRect();
        width = bounds.width;
        height = bounds.height;
      };
      window.addEventListener('resize', updateSize);
      removeResizeListener = () => window.removeEventListener('resize', updateSize);

      const animate = (time: number) => {
        if (time - lastPaint >= 40) {
          const x = width * (0.5 + Math.cos(time * 0.00022) * 0.3);
          const y = height * (0.5 + Math.sin(time * 0.00017) * 0.2);
          ghost.style.setProperty('--reveal-x', `${x}px`);
          ghost.style.setProperty('--reveal-y', `${y}px`);
          lastPaint = time;
        }
        frame = window.requestAnimationFrame(animate);
      };

      frame = window.requestAnimationFrame(animate);
    };

    startTouchReveal();
    reducedMotion.addEventListener('change', startTouchReveal);
    coarsePointer.addEventListener('change', startTouchReveal);
    return () => {
      stopTouchReveal();
      reducedMotion.removeEventListener('change', startTouchReveal);
      coarsePointer.removeEventListener('change', startTouchReveal);
    };
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === 'mouse') updateReveal(event.clientX, event.clientY);
  };

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="relative isolate overflow-hidden bg-bg px-6 pb-20 pt-24 lg:px-10 lg:pb-24 lg:pt-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <span className="hero-ghost-text">Risk trajectory</span>
        <span ref={ghostRef} className="hero-ghost-text hero-ghost-reveal">Risk trajectory</span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="mx-auto w-full max-w-4xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="section-label mb-6 inline-flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              Explainable temporal AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display mb-6 max-w-4xl"
            >
              See the <span className="editorial-accent">change.</span>
              <br />
              Shape what happens <span className="editorial-accent">next.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mb-8 max-w-2xl text-type-hero-copy text-gray"
            >
              A change in behaviour rarely happens in isolation. RadarSeq connects the dots across your data to show where risk is building, what has changed and which cases deserve attention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-pill btn-primary focus-ring w-full sm:w-auto">
                Discuss your use case
              </a>
              <a href="#demos" className="btn-pill btn-secondary focus-ring w-full sm:w-auto">
                Explore the demonstration
              </a>
            </motion.div>
            <p className="mb-9 text-xs text-mutedText">Your data. A clear use case. A practical route forward.</p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="border-t border-border pt-6"
            >
              <p className="section-label mb-4">Illustrative risk stages</p>
              <div className="flex flex-wrap gap-2">
                {stages.map((stage, index) => (
                  <motion.button
                    key={stage.name}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={active === index}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="focus-ring rounded-full border px-3 py-2 text-xs font-semibold transition-colors"
                    style={{
                      background: active === index
                        ? `color-mix(in srgb, ${stage.color} 12%, rgb(var(--color-surface)))`
                        : 'rgb(var(--color-surface))',
                      color: stage.color,
                      borderColor: active === index ? stage.color : 'rgb(var(--color-border) / var(--color-border-alpha))',
                    }}
                  >
                    {stage.name}
                  </motion.button>
                ))}
              </div>
              <p className="mt-4 max-w-xl text-sm text-gray" aria-live="polite">
                {stages[active].name}: {stages[active].description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative mx-auto w-full max-w-[640px] lg:max-w-none"
          >
            <div className="absolute -top-5 right-0 z-20 flex max-w-full flex-wrap justify-end gap-2">
              {technologyTags.map((tag) => (
                <span key={tag} className="tech-tag px-3 py-2">{tag}</span>
              ))}
            </div>
            <div className="hero-scene-frame mt-5 h-[320px] sm:h-[400px] lg:h-[520px]">
              <div className="absolute inset-0 z-10">
                <SceneErrorBoundary
                  fallback={<div className="hero-3d-fallback absolute inset-0" aria-hidden="true" />}
                >
                  <HeroScene activeStageIndex={active} />
                </SceneErrorBoundary>
              </div>
              <div className="pointer-events-none absolute left-5 top-5 z-20 flex items-center gap-2 section-label">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Conceptual signal observatory
              </div>
              <p className="pointer-events-none absolute bottom-4 right-5 z-20 max-w-xs text-right text-xs leading-relaxed text-mutedText">
                Conceptual visualisation. No live model or customer data.
              </p>
            </div>
            <p className="section-label mt-4 text-right">
              <span className="hero-hint-desktop">Move your cursor to reveal</span>
              <span className="hero-hint-touch">Slow reveal on touch</span>
              <span className="hero-hint-reduced">Static reveal · reduced motion</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, staggerChildren: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-4 border-t border-border pt-7 sm:grid-cols-3"
        >
          <div className="border-b border-border pb-5 sm:border-b-0 sm:pb-0 sm:pr-5 sm:border-r">
            <p className="section-label mb-2 text-accent-strong">RadarSeq v1</p>
            <h3 className="font-display">CNN + BiLSTM</h3>
            <p className="mt-1 text-sm text-mutedText">Radar-chart image sequences</p>
          </div>
          <div className="border-b border-border pb-5 sm:border-b-0 sm:pb-0 sm:px-5 sm:border-r">
            <p className="section-label mb-2 text-accent-strong">RadarSeq++</p>
            <h3 className="font-display">Direct feature sequences</h3>
            <p className="mt-1 text-sm text-mutedText">State-space and attention research</p>
          </div>
          <div className="sm:pl-5">
            <p className="section-label mb-2 text-risk-stable">Risk journey</p>
            <h3 className="font-display">Five illustrative stages</h3>
            <p className="mt-1 text-sm text-mutedText">Human review remains central</p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {[
            ['01', 'Connect histories', 'Relevant activity and operational records'],
            ['02', 'Study trajectories', 'Evaluate temporal patterns against a baseline'],
            ['03', 'Review evidence', 'Support human decisions with context'],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
              <span className="font-display text-3xl text-accent-strong">{number}</span>
              <h3 className="mt-2 text-ink">{title}</h3>
              <p className="mt-1 text-sm text-mutedText">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
