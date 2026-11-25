'use client';

import Reveal from '@/components/ui/Reveal';
import { pricingPlans } from '@/lib/data';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Delivery & indicative pricing</div>
          <h2 className="font-display max-w-3xl mx-auto">
            Choose a delivery route that fits your workflow.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-gray">
            Indicative launch prices for discussion. Scope and model fit are confirmed before purchase; figures exclude applicable taxes.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
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
                    <div className="mt-3 font-display text-type-price">{plan.price}</div>
                  </div>
                </div>

                <p className="text-gray text-base leading-relaxed mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-base text-ink/80">
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
