'use client';

import Reveal from '@/components/ui/Reveal';
import { pricingPlans } from '@/lib/data';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Pricing</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Flexible commercial models for teams moving from <span className="italic-pink">research to operations</span>.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <article
                className={`card p-7 h-full rounded-card flex flex-col ${
                  plan.featured ? 'ring-2 ring-pink/30 shadow-glow' : ''
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.14em] text-ink/50">{plan.name}</div>
                    <div className="mt-3 font-display text-4xl font-extrabold tracking-tight">{plan.price}</div>
                  </div>
                  {plan.featured && (
                    <span className="rounded-full bg-gradient-to-r from-pink to-purple px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      Most popular
                    </span>
                  )}
                </div>

                <p className="text-gray text-[15px] leading-relaxed mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] text-ink/80">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-pink/10 text-pink">
                        <Check size={12} strokeWidth={2.4} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn-pill w-full focus-ring ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
