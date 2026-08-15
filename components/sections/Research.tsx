'use client';

import Reveal from '@/components/ui/Reveal';
import CountUpStat from '@/components/ui/CountUpStat';

const stats = [
  { value: '0.5B', label: 'Model params (Qwen2.5)' },
  { value: '0.17%', label: 'Params retrained (QLoRA)' },
  { value: '25s', label: 'Training time, 4GB laptop GPU' },
];

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Applied Research</div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Case study — predicting courier churn with a small LLM.
          </h2>
          <p className="mt-5 text-gray text-base font-semibold">By Soham Patel, University of East London</p>
        </Reveal>

        <Reveal>
          <div className="card p-8 md:p-12 mb-10 rounded-card">
            <p className="text-gray text-lg leading-relaxed max-w-prose mx-auto text-center">
              Gig-platform couriers churn with no warning, costing $8,000–$10,000 to replace each
              one. This study fine-tunes a small open-source language model to read a courier&apos;s
              daily work history and predict 45-day churn — grounded in three published methods
              (TALLRec, BehaviorLM, CoLLM) before a line of code was written.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card p-8 text-center h-full rounded-card">
                <CountUpStat value={s.value} className="font-display font-extrabold text-3xl italic-pink mb-2" />
                <div className="text-gray text-sm font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-card bg-dark text-white p-8 h-full card-dark">
              <div className="font-mono text-xs text-pink font-bold mb-4">create_seq.py</div>
              <p className="font-display font-semibold text-lg mb-4">Daily logs → conversation</p>
              <pre className="font-mono text-[13px] leading-relaxed text-white/60 whitespace-pre-wrap">
{`for day in courier.history:
    prompt = summarize(day.orders,
                        day.acceptance_rate,
                        day.earnings)
    dataset.append(to_chat_pair(prompt))`}
              </pre>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card p-8 h-full rounded-card">
              <div className="font-mono text-xs text-pink font-bold mb-4">Sample exchange</div>
              <div className="space-y-4 text-sm">
                <div className="bg-white/50 rounded-2xl p-4 border border-border">
                  <span className="font-bold">You: </span>
                  <span className="text-gray">
                    Orders down 34% this week, acceptance rate fell from 91% to 68%, earnings down
                    21%. What&apos;s the churn risk?
                  </span>
                </div>
                <div className="bg-pink/5 rounded-2xl p-4 border border-pink/15">
                  <span className="font-bold text-pink">Model: </span>
                  <span className="text-ink/80">
                    High churn risk. The combined drop in acceptance rate and order volume mirrors
                    the pre-churn pattern seen in the training set — recommend proactive outreach
                    within 3 days.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
