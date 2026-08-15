'use client';

import Reveal from '@/components/ui/Reveal';
import { publications, credibilityTags } from '@/lib/data';

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 lg:px-10 bg-dark text-white">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-8">
          <div className="section-label mb-4">Credibility</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Backed by <span className="italic-pink">published research</span>.
          </h2>
        </Reveal>

        <Reveal className="text-center mb-16">
          <p className="text-white/55 text-lg max-w-prose mx-auto leading-relaxed">
            RadarSeq is grounded in the peer-reviewed ACM/Springer 2025 paper &quot;RadarSeq: A
            Temporal Vision Framework for User Churn Prediction via Radar Chart Sequences&quot; by
            Najafi, Sepanj and Jafari, validated on roughly 16,000 couriers and outperforming
            CatBoost, ChurnViT, CNN-only and CNN+MLP baselines.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {publications.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="card-dark gradient-border p-8 h-full">
                <h3 className="font-display font-bold text-lg leading-snug mb-4">{p.title}</h3>
                <p className="text-white/50 text-sm mb-1">{p.authors}</p>
                <p className="text-pink text-sm font-semibold mb-4">{p.venue}</p>
                <p className="text-white/60 text-sm leading-relaxed">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {credibilityTags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono font-semibold px-4 py-2 rounded-full border border-white/15 text-white/60"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
