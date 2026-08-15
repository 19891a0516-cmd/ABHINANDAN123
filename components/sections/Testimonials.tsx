'use client';

import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/lib/data';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Testimonials</div>
          <h2 className="font-display font-extrabold text-[24px] md:text-[32px] lg:text-[40px] tracking-tight max-w-3xl mx-auto">
            Trusted by teams who need to see risk <span className="italic-pink">before</span> it shows up in the ledger.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="card p-7 h-full rounded-card flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink to-purple text-white flex items-center justify-center">
                    <Quote size={18} strokeWidth={2} />
                  </div>
                  <div className="flex items-center gap-1 text-[#f4b942]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={1.5} />
                    ))}
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-gray flex-1">“{item.quote}”</p>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="font-display font-bold text-lg text-ink">{item.name}</div>
                  <div className="text-sm text-ink/60">{item.title}</div>
                  <div className="mt-1 text-xs font-mono uppercase tracking-[0.12em] text-pink">{item.company}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
