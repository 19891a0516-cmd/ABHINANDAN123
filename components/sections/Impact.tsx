'use client';

import Reveal from '@/components/ui/Reveal';
import CountUpStat from '@/components/ui/CountUpStat';
import { impactStats, partners } from '@/lib/data';

export default function Impact() {
  return (
    <section id="impact" className="py-24 px-6 lg:px-10 bg-dark text-white">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Business Impact</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Real numbers, <span className="italic-pink">real portfolios</span>.
          </h2>
          <div className="flex items-end justify-center gap-1.5 mt-6" aria-hidden="true">
            {[
              { h: 18, c: '#3D5AFE' },
              { h: 28, c: '#00C2A8' },
              { h: 12, c: '#D4A017' },
              { h: 34, c: '#FF4F87' },
              { h: 22, c: '#5B4BFF' },
            ].map((b, i) => (
              <span key={i} className="w-1.5 rounded-full" style={{ height: b.h, background: b.c }} />
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {impactStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="card-dark p-7 h-full text-center rounded-card">
                <CountUpStat
                  value={s.value}
                  className="font-display font-extrabold text-3xl md:text-4xl italic-pink mb-3"
                />
                <div className="font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-white/45 text-xs">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <div id="partners" className="text-center">
            <div className="section-label mb-6">Business Partners</div>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.map((p) => (
                <span
                  key={p}
                  className="btn-pill !h-12 !px-7 !text-sm font-semibold border border-white/15 bg-white/[0.03] text-white/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
