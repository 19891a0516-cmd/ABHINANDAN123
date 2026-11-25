'use client';

import Reveal from '@/components/ui/Reveal';
import { projects } from '@/lib/data';

const applications = [
  {
    title: 'Portfolio review',
    body: 'Examine how observed risk changes across a portfolio and help reviewers prioritise investigation.',
  },
  {
    title: 'Explainable evidence',
    body: 'Bring temporal direction, influential periods and observations into the review context.',
  },
  {
    title: 'Review and traceability',
    body: 'Plan for model versions, as-of timestamps, data-quality checks and a record of human review. Explanations are evidence to investigate, not guarantees.',
  },
  {
    title: 'Delivery shaped to the environment',
    body: 'A dashboard, scheduled export or agreed API integration can be scoped around the intended workflow.',
  },
];

export default function EnterpriseApplications() {
  return (
    <section id="enterprise" className="bg-dark px-6 py-24 text-ink lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-14 text-center">
          <div className="section-label mb-4">Enterprise applications</div>
          <h2 className="mx-auto max-w-3xl font-display">
            A temporal perspective for <span className="editorial-accent">portfolio decisions.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-body">
            Application areas differ in maturity. Data fit, deployment, review responsibilities and evaluation
            must be agreed before applying research to an organisation.
          </p>
        </Reveal>

        <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {applications.map((application, index) => (
            <Reveal key={application.title} delay={index * 0.06}>
              <article className="card-dark h-full rounded-card p-7">
                <h3 className="font-display">{application.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{application.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-card border border-border bg-surface-overlay/[0.04] p-7 md:p-9">
            <h3 className="font-display">Research and implementation areas</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {projects.map((project) => (
                <div key={project.slug} className="flex flex-col justify-between gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center">
                  <span className="font-semibold">{project.title}</span>
                  <span className="text-sm text-mutedText">{project.status}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-mutedText">
              These categories describe research and implementation status, not a claim that a live product is
              deployed in each area. AI outputs support review; people remain responsible for decisions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
