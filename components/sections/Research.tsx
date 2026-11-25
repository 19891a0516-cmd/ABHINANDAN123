'use client';

import Reveal from '@/components/ui/Reveal';
import { projects } from '@/lib/data';

const researchDirections = [
  {
    title: 'Customer retention',
    body: 'The current research foundation focuses on courier churn. Applying a model in a new setting requires checking feature, outcome and data fit.',
  },
  {
    title: 'Loan risk',
    body: 'Work in implementation explores how repayment behaviour and portfolio histories can support earlier review of changing exposure.',
  },
  {
    title: 'Fraud, AML and property',
    body: 'Active research areas examine event sequences, collateral and related contextual signals. They are research directions, not production claims.',
  },
];

export default function Research() {
  return (
    <section id="applied-research" className="bg-bg px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-14 text-center">
          <div className="section-label mb-4">Applied research</div>
          <h2 className="mx-auto max-w-3xl font-display">
            From a research question to a <span className="editorial-accent">decision workflow.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-gray">
            RadarSeq research studies temporal patterns and explanation methods, with courier churn as its
            reported research foundation. Other business areas need their own evaluation and validation.
          </p>
        </Reveal>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {researchDirections.map((direction, index) => (
            <Reveal key={direction.title} delay={index * 0.06}>
              <article className="card h-full rounded-card p-8">
                <h3 className="mb-3 font-display">{direction.title}</h3>
                <p className="text-sm leading-relaxed text-gray">{direction.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-card border border-border bg-alternative p-7 text-ink md:p-10">
            <h3 className="font-display">Applied research status</h3>
            <p className="mt-3 max-w-prose leading-relaxed text-gray">
              Research validation, implementation work and active research are distinct stages. No result shown
              here implies a live deployment, production performance or an automated decision.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.slug} className="flex items-start justify-between gap-4 rounded-xl border border-border bg-surface p-4">
                  <span className="text-sm font-semibold">{project.title}</span>
                  <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-right text-xs text-gray">
                    {project.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
