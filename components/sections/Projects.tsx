'use client';

import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';
import { projects } from '@/lib/data';
import { ArrowRight, CircleDollarSign, ShieldCheck, Home } from 'lucide-react';

const icons: Record<string, React.ElementType> = {
  arrow: ArrowRight,
  coin: CircleDollarSign,
  shield: ShieldCheck,
  home: Home,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Projects · One platform, every team</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Built for how <span className="italic-pink">your team</span> actually works.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <TiltCard className="card p-9 h-full rounded-card" max={4}>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${p.iconColor}18`, color: p.iconColor }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span
                      className="shrink-0 text-xs font-bold font-mono px-3 py-1.5 rounded-full"
                      style={{ background: `${p.statusColor}18`, color: p.statusColor }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4">{p.title}</h3>
                  <ul className="space-y-3">
                    {p.questions.map((q) => (
                      <li key={q} className="flex gap-2.5 text-[15px] text-gray leading-relaxed">
                        <span className="text-pink mt-1">→</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
