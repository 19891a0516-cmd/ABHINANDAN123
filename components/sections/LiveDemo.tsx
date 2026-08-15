'use client';

import Reveal from '@/components/ui/Reveal';
import { portfolioDistribution, priorityQueue } from '@/lib/data';

export default function LiveDemo() {
  return (
    <section id="demo" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Live Demo</div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            See a portfolio, at a glance.
          </h2>
        </Reveal>

        <Reveal>
          <div className="card !rounded-[28px] overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border bg-white/40">
              <span className="w-3 h-3 rounded-full bg-[#E8622C]" />
              <span className="w-3 h-3 rounded-full bg-accent-gold" />
              <span className="w-3 h-3 rounded-full bg-accent-teal" />
              <span className="ml-4 text-xs font-mono text-gray">RadarSeq Analyst Console</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
              <div>
                <h3 className="font-display font-bold text-lg mb-6">Portfolio Stage Distribution</h3>
                <div className="space-y-4">
                  {portfolioDistribution.map((d) => (
                    <div key={d.stage}>
                      <div className="flex justify-between text-sm font-semibold mb-1.5">
                        <span>{d.stage}</span>
                        <span className="font-mono text-gray">{d.pct}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-[#F1F1F1] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${d.pct}%`, background: d.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg mb-6">Priority Queue</h3>
                <div className="space-y-2.5">
                  {priorityQueue.map((q) => (
                    <div
                      key={q.id}
                      className="flex items-center justify-between px-4 py-3.5 rounded-2xl border border-border bg-white/70 hover:border-pink/30 transition-colors"
                    >
                      <span className="font-mono text-sm text-ink/80">{q.id}</span>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: `${q.color}18`, color: q.color }}
                      >
                        {q.stage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
