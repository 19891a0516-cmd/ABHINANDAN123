'use client';

import Reveal from '@/components/ui/Reveal';
import { publications, recognitions, researchResults } from '@/lib/data';

export default function Publications() {
  return (
    <section id="research" className="bg-dark px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-14 text-center">
          <div className="section-label mb-4">Research & publications</div>
          <h2 className="mx-auto max-w-3xl font-display text-[32px] font-extrabold tracking-tight md:text-[44px] lg:text-[52px]">
            Research you can inspect. A direction you can understand.
          </h2>
          <p className="mx-auto mt-6 max-w-prose text-lg leading-relaxed text-white/60">
            The methods, results and limitations behind the RadarSeq family. Research is the foundation of the
            proposition, not a substitute for validation in a business setting.
          </p>
        </Reveal>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <Reveal key={publication.title} delay={index * 0.06}>
              <article className="card-dark h-full rounded-card p-7">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-pink">{publication.status}</p>
                <h3 className="mb-4 font-display text-lg font-bold leading-snug">{publication.title}</h3>
                <p className="mb-1 text-sm text-white/65">{publication.authors}</p>
                <p className="mb-4 text-sm font-semibold text-pink">{publication.venue}</p>
                <p className="text-sm leading-relaxed text-white/60">{publication.note}</p>
                {'href' in publication && publication.href && (
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-md text-sm font-semibold text-white underline decoration-pink underline-offset-4 focus-ring"
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
            <h3 className="mb-4 font-display text-xl font-bold">Research recognition</h3>
            <ul className="space-y-3">
              {recognitions.map((recognition) => (
                <li key={recognition.name} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="font-semibold text-pink">{recognition.name}</span>
                  <span className="text-sm text-white/60">{recognition.event}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-dark overflow-hidden rounded-card">
            <div className="border-b border-white/10 px-6 py-6 md:px-8">
              <h3 className="font-display text-xl font-bold">Reported courier-churn research results</h3>
              <p className="mt-2 text-sm text-white/55">The studies use different inputs and evaluation setups.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-white/55">
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
                    <tr key={result.study} className="border-t border-white/10">
                      <th scope="row" className="px-6 py-4 font-semibold">{result.study}</th>
                      <td className="px-6 py-4 text-white/70">{result.precision}</td>
                      <td className="px-6 py-4 text-white/70">{result.recall}</td>
                      <td className="px-6 py-4 font-semibold text-pink">{result.f1}</td>
                      <td className="px-6 py-4 text-white/70">{result.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            These are reported research results, not service guarantees or a verified identical-partition
            benchmark. RadarSeq-LLM explores a different decision-support output; it does not outperform the
            standalone sequence model in the reported figures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
