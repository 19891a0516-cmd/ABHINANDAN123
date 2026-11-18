'use client';

import Reveal from '@/components/ui/Reveal';
import { innovations } from '@/lib/data';

export default function Innovations() {
  return (
    <section id="innovations" className="py-24 px-6 lg:px-10 bg-dark text-white relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[380px] h-[380px] rounded-full bg-accent-purple/10 blur-[120px]" />
      <div className="max-w-container mx-auto relative">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Innovations</div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            From connected evidence to useful decisions.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {innovations.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1}>
              <div className="card-dark gradient-border p-9 h-full">
                <div className="font-mono text-pink text-sm mb-6">{it.n}</div>
                <h3 className="font-display font-bold text-xl mb-3">{it.title}</h3>
                <p className="text-white/60 text-[15px] leading-relaxed">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
