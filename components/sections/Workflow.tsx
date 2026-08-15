'use client';

import Reveal from '@/components/ui/Reveal';
import { workflow } from '@/lib/data';

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Workflow</div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            From raw signal to recommended action.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6">
          {workflow.map((w, i) => (
            <Reveal key={w.step} delay={i * 0.08}>
              <div className="card p-8 h-full relative rounded-card">
                <div className="font-mono text-xs text-pink font-bold mb-4">STEP {i + 1}</div>
                <h3 className="font-display font-bold text-lg mb-2">{w.step}</h3>
                <p className="text-gray text-sm leading-relaxed">{w.body}</p>
                {i < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-border text-2xl">
                    →
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
