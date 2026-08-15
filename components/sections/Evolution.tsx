'use client';

import Reveal from '@/components/ui/Reveal';
import { evolutionRows } from '@/lib/data';

export default function Evolution() {
  return (
    <section id="evolution" className="py-24 px-6 lg:px-10 bg-dark text-white">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Evolution</div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            RadarSeq v1 → v2.
          </h2>
        </Reveal>

        <Reveal>
          <div className="card-dark overflow-hidden rounded-card">
            <div className="grid grid-cols-3 bg-white/[0.05] px-6 md:px-9 py-5 text-sm font-mono uppercase tracking-wider text-white/50">
              <div>Dimension</div>
              <div>v1</div>
              <div>v2</div>
            </div>
            {evolutionRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-6 md:px-9 py-6 text-sm md:text-base transition-colors hover:bg-white/[0.03] ${
                  i !== evolutionRows.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <div className="font-display font-bold">{row.label}</div>
                <div className="text-white/45">{row.v1}</div>
                <div className="text-pink font-semibold">{row.v2}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
