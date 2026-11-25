'use client';

import Reveal from '@/components/ui/Reveal';
import { publications, recognitions, researchResults } from '@/lib/data';

export default function Publications() {
  return (
    <section id="research" className="bg-dark px-6 py-24 text-ink lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-14 text-center">
          <div className="section-label mb-4">Research & publications</div>
          <h2 className="mx-auto max-w-3xl font-display">
            Research you can <span className="editorial-accent">inspect.</span> A direction you can <span className="editorial-accent">understand.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-prose text-lg leading-relaxed text-body">
            The methods, results and limitations behind the RadarSeq family. Research is the foundation of the
            proposition, not a substitute for validation in a business setting.
          </p>
        </Reveal>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <Reveal key={publication.title} delay={index * 0.06}>
              <article className="card-dark h-full rounded-card p-7">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-pink">{publication.status}</p>
                <h3 className="mb-4 font-display">{publication.title}</h3>
                <p className="mb-1 text-sm text-body">{publication.authors}</p>
                <p className="mb-4 text-sm font-semibold text-pink">{publication.venue}</p>
                <p className="text-sm leading-relaxed text-body">{publication.note}</p>
                {'href' in publication && publication.href && (
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-md text-sm font-semibold text-ink underline decoration-pink underline-offset-4 focus-ring"
                  >
                    Read the paper
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-12">
          <div className="card-dark rounded-card p-7">
            <h3 className="mb-4 font-display">Research recognition</h3>
            <ul className="space-y-3">
              {recognitions.map((recognition) => (
                <li key={recognition.name} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-semibold text-pink">{recognition.name}</span>
                  <span className="text-sm text-body">{recognition.event}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-dark overflow-hidden rounded-card">
            <div className="border-b border-border px-6 py-6 md:px-8">
              <h3 className="font-display">Reported courier-churn research results</h3>
              <p className="mt-2 text-sm text-mutedText">The studies use different inputs and evaluation setups.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-surface-overlay/[0.04] text-xs uppercase tracking-wider text-mutedText">
                  <tr>
                    <th scope="col" className="px-6 py-4">Study</th>
                    <th scope="col" className="px-6 py-4">Precision</th>
                    <th scope="col" className="px-6 py-4">Recall</th>
                    <th scope="col" className="px-6 py-4">F1</th>
                    <th scope="col" className="px-6 py-4">Research focus</th>
                  </tr>
                </thead>
                <tbody>
                  {researchResults.map((result) => (
                    <tr key={result.study} className="border-t border-border">
                      <th scope="row" className="px-6 py-4 font-semibold">{result.study}</th>
                      <td className="px-6 py-4 text-body">{result.precision}</td>
                      <td className="px-6 py-4 text-body">{result.recall}</td>
                      <td className="px-6 py-4 font-semibold text-pink">{result.f1}</td>
                      <td className="px-6 py-4 text-body">{result.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mutedText">
            These are reported research results, not service guarantees or a verified identical-partition
            benchmark. RadarSeq-LLM explores a different decision-support output; it does not outperform the
            standalone sequence model in the reported figures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
