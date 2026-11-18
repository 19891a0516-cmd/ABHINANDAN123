'use client';

import Reveal from '@/components/ui/Reveal';

const sampleObservations = [22, 29, 25, 38, 42, 51, 47];

export default function Dashboard() {
  const max = Math.max(...sampleObservations);

  return (
    <section id="dashboard-example" className="bg-dark px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 text-center">
          <div className="section-label mb-4">Demonstration · synthetic sample</div>
          <h2 className="mx-auto max-w-3xl font-display text-[32px] font-extrabold md:text-[44px]">
            An example of a temporal review view.
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-white/60">
            This static illustration is not connected to an API, live dashboard or risk model.
          </p>
        </Reveal>
        <Reveal>
          <div className="card-dark rounded-card p-7 md:p-10">
            <h3 className="font-display text-lg font-semibold">Synthetic observation trend</h3>
            <div className="mt-8 flex h-48 items-end gap-3" role="img" aria-label="Synthetic sample values across seven observations">
              {sampleObservations.map((value, index) => (
                <div key={index} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-purple to-pink"
                    style={{ height: `${(value / max) * 100}%` }}
                    title={`Synthetic value ${value}`}
                  />
                  <span className="text-xs text-white/50">Obs. {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
