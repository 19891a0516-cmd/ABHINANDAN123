'use client';

import dynamic from 'next/dynamic';
import Reveal from '@/components/ui/Reveal';
import { evolutionRows } from '@/lib/data';

const EvolutionScene = dynamic(() => import('@/components/three/EvolutionScene'), {
  ssr: false,
  loading: () => <div className="h-full animate-pulse bg-white/[0.03]" aria-label="Loading conceptual 3D comparison" />,
});

export default function Evolution() {
  return (
    <section id="evolution" className="light-surface py-24 px-6 lg:px-10 bg-dark text-white">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Evolution</div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            RadarSeq v1 and RadarSeq++.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Two distinct research pipelines: image-based temporal modelling in v1, and direct feature-sequence modelling in RadarSeq++.
          </p>
        </Reveal>

        <Reveal className="mb-12">
          <div className="relative h-[260px] overflow-hidden rounded-card border border-border bg-[radial-gradient(ellipse_at_50%_50%,rgba(179,138,92,0.16),transparent_65%),linear-gradient(145deg,#FFFDF8,#E8DDCB)] sm:h-[320px]">
            <div className="pointer-events-none absolute inset-x-6 top-5 z-10 flex justify-between gap-4 text-[10px] font-mono font-bold uppercase tracking-wider sm:inset-x-9 sm:text-xs">
              <span className="text-pink-soft">v1 · CNN + BiLSTM</span>
              <span className="text-accent-teal">RadarSeq++ · State-space</span>
            </div>
            <div className="absolute inset-0">
              <EvolutionScene />
            </div>
            <p className="pointer-events-none absolute bottom-4 right-5 z-10 text-right text-[10px] text-white/45 sm:text-xs">
              Conceptual 3D visualisation · Not to scale
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-dark overflow-hidden rounded-card">
            <div className="grid grid-cols-3 bg-white/[0.05] px-6 py-5 text-xs font-mono uppercase tracking-wider text-white/55 md:px-9 md:text-sm">
              <div>Dimension</div>
              <div>RadarSeq v1</div>
              <div>RadarSeq++</div>
            </div>
            {evolutionRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-6 md:px-9 py-6 text-sm md:text-base transition-colors hover:bg-white/[0.03] ${
                  i !== evolutionRows.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="font-display font-bold">{row.label}</div>
                <div className="pr-3 text-white/60">{row.v1}</div>
                <div className="text-pink">{row.v2}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
