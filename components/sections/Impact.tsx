'use client';

import Reveal from '@/components/ui/Reveal';
import { collaborators } from '@/lib/data';

export default function Impact() {
  return (
    <section id="collaborators" className="bg-dark px-6 py-24 text-ink lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 text-center">
          <div className="section-label mb-4">Research & industry connections</div>
          <h2 className="mx-auto max-w-3xl font-display">
            Research shaped by <span className="editorial-accent">academic and industry collaboration.</span>
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((collaborator, index) => (
            <Reveal key={collaborator.name} delay={index * 0.05}>
              <article className="card-dark h-full rounded-card p-6">
                <h3 className="font-display">{collaborator.name}</h3>
                <p className="mt-2 text-sm text-mutedText">{collaborator.relationship}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-mutedText">
          Collaborations and programme support are distinct and do not imply endorsement of a commercial service.
        </p>
      </div>
    </section>
  );
}
