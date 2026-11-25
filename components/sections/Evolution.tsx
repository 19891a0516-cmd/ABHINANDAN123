'use client';

import dynamic from 'next/dynamic';
import Reveal from '@/components/ui/Reveal';
import { evolutionRows } from '@/lib/data';

const EvolutionScene = dynamic(() => import('@/components/three/EvolutionScene'), {
  ssr: false,
  loading: () => <div className="h-full animate-pulse bg-surface-overlay/[0.04]" aria-label="Loading conceptual 3D comparison" />,
});

export default function Evolution() {
  return (
    <section id="evolution" className="py-24 px-6 lg:px-10 bg-dark text-ink">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Evolution</div>
          <h2 className="font-display max-w-3xl mx-auto">
            RadarSeq v1 and <span className="editorial-accent">RadarSeq++.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-body md:text-base">
            Two distinct research pipelines: image-based temporal modelling in v1, and direct feature-sequence modelling in RadarSeq++.
          </p>
        </Reveal>

        <Reveal className="mb-12">
          <div className="hero-scene-frame relative h-[260px] sm:h-[320px]">
            <div className="pointer-events-none absolute inset-x-6 top-5 z-10 flex justify-between gap-4 text-[10px] font-mono font-bold uppercase tracking-wider sm:inset-x-9 sm:text-xs">
              <span className="text-accent-strong">v1 · CNN + BiLSTM</span>
              <span className="text-risk-stable">RadarSeq++ · State-space</span>
            </div>
            <div className="absolute inset-0">
              <EvolutionScene />
            </div>
            <p className="pointer-events-none absolute bottom-4 right-5 z-10 text-right text-[10px] text-mutedText sm:text-xs">
              Conceptual 3D visualisation · Not to scale
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-dark overflow-hidden rounded-card">
            <div className="grid grid-cols-3 bg-surface-overlay/[0.06] px-6 py-5 text-xs font-mono uppercase tracking-wider text-mutedText md:px-9 md:text-sm">
              <div>Dimension</div>
              <div>RadarSeq v1</div>
              <div>RadarSeq++</div>
            </div>
            {evolutionRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-6 md:px-9 py-6 text-sm md:text-base transition-colors hover:bg-surface-overlay/[0.04] ${
                  i !== evolutionRows.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="font-display font-bold">{row.label}</div>
                <div className="pr-3 text-body">{row.v1}</div>
                <div className="text-pink">{row.v2}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
