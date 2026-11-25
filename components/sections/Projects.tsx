'use client';

import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';
import { projects } from '@/lib/data';
import { ArrowRight, CircleDollarSign, ShieldCheck, Home } from 'lucide-react';
import Link from 'next/link';

const icons = [ArrowRight, CircleDollarSign, ShieldCheck, Home];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Projects & solution areas</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Built for how <span className="italic-pink">your team</span> actually works.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <TiltCard className="card h-full rounded-card p-9" max={4}>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgb(var(--color-muted))', color: 'rgb(var(--color-ink))' }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="shrink-0 rounded-full bg-pink/10 px-3 py-1.5 font-mono text-xs font-bold text-pink">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-4">{p.title}</h3>
                  <p className="mb-4 text-[15px] leading-relaxed text-gray">{p.summary}</p>
                  <p className="text-sm font-semibold text-ink/80">{p.question}</p>
                  <Link href={`/projects/${p.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-pink focus-ring">
                    Project details <span aria-hidden="true">→</span>
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
