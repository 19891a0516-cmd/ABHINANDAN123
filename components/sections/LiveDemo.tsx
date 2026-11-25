'use client';

import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { stages } from '@/lib/data';

const DemoCharts = lazy(() => import('./DemoCharts'));

const radarIndicators = ['Activity', 'Engagement', 'Spend', 'Stability', 'Change'];
const radarProfiles = [
  [24, 76, 22, 88, 20],
  [42, 63, 38, 70, 43],
  [60, 53, 56, 52, 61],
  [76, 37, 72, 35, 78],
  [88, 24, 84, 21, 92],
];
const radarCenter = { x: 150, y: 138 };
const radarRadius = 84;

function radarCoordinates(values: number[]) {
  return values.map((value, index) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / values.length;
    const radius = (value / 100) * radarRadius;
    return `${radarCenter.x + Math.cos(angle) * radius},${radarCenter.y + Math.sin(angle) * radius}`;
  }).join(' ');
}

function RiskRadar({ activeStage }: { activeStage: number }) {
  return (
    <figure className="mt-6 rounded-2xl bg-bg/70 p-3">
      <figcaption className="px-2 pt-2 text-sm font-semibold">Illustrative signal profile</figcaption>
      <svg
        viewBox="0 0 300 280"
        role="img"
        aria-label={`Synthetic signal profile for illustrative ${stages[activeStage].name} stage`}
        className="mx-auto mt-2 h-auto w-full max-w-[340px]"
      >
        {[0.25, 0.5, 0.75, 1].map((scale) => (
          <polygon
            key={scale}
            points={radarCoordinates(radarIndicators.map(() => scale * 100))}
            fill="none"
            stroke="#D9CBB8"
            strokeWidth="1"
          />
        ))}
        {radarIndicators.map((indicator, index) => {
          const angle = -Math.PI / 2 + (index * 2 * Math.PI) / radarIndicators.length;
          const x = radarCenter.x + Math.cos(angle) * radarRadius;
          const y = radarCenter.y + Math.sin(angle) * radarRadius;
          const labelX = radarCenter.x + Math.cos(angle) * 112;
          const labelY = radarCenter.y + Math.sin(angle) * 112;
          return (
            <g key={indicator}>
              <line x1={radarCenter.x} y1={radarCenter.y} x2={x} y2={y} stroke="#D9CBB8" strokeWidth="1" />
              <text
                x={labelX}
                y={labelY}
                textAnchor={Math.abs(Math.cos(angle)) < 0.3 ? 'middle' : Math.cos(angle) > 0 ? 'start' : 'end'}
                dominantBaseline="middle"
                fontSize="10"
                fill="#887969"
              >
                {indicator}
              </text>
            </g>
          );
        })}
        <polygon
          points={radarCoordinates(radarProfiles[activeStage])}
          fill={stages[activeStage].color}
          fillOpacity="0.18"
          stroke={stages[activeStage].color}
          strokeWidth="2.5"
        />
      </svg>
      <p className="px-2 pb-1 text-xs text-gray">Synthetic indicator values · not measured data or model output.</p>
    </figure>
  );
}

export default function LiveDemo() {
  const [activeStage, setActiveStage] = useState(1);
  const [chartsVisible, setChartsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demos" ref={sectionRef} className="bg-bg px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 text-center">
          <div className="section-label mb-4">Risk intelligence demonstrations</div>
          <h2 className="mx-auto max-w-3xl font-display text-[32px] font-bold tracking-tight md:text-[44px] lg:text-[52px]">
            Explore an illustrative risk journey.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-gray">
            Demonstration only. Charts use fixed sample values, not customer data, a live service or model inference.
          </p>
        </Reveal>

        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="card h-full rounded-card p-7 md:p-9">
              <div className="mb-3 inline-flex rounded-full bg-pink/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-pink">
                Demonstration · sample scenario
              </div>
              <h3 className="font-display text-2xl font-bold">Risk Radar</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray">
                Select a stage to explore the illustrative journey. A stage is not a prediction or recommendation.
              </p>
              <RiskRadar activeStage={activeStage} />
              <div role="group" aria-label="Select illustrative risk stage" className="mt-6 flex flex-wrap gap-2">
                {stages.map((stage, index) => (
                  <button
                    key={stage.name}
                    type="button"
                    aria-pressed={activeStage === index}
                    onClick={() => setActiveStage(index)}
                    className="rounded-full border px-3 py-2 text-sm font-semibold transition-colors focus-ring"
                    style={{
                      color: activeStage === index ? stage.color : undefined,
                      borderColor: activeStage === index ? stage.color : 'rgb(var(--color-border))',
                      background: activeStage === index ? `${stage.color}14` : 'transparent',
                    }}
                  >
                    {stage.name}
                  </button>
                ))}
              </div>
              <div className="mt-7 rounded-2xl border border-border bg-bg/70 p-5" aria-live="polite">
                <p className="font-mono text-xs uppercase tracking-wider text-gray">Selected illustrative stage</p>
                <p className="mt-2 font-display text-xl font-bold" style={{ color: stages[activeStage].color }}>
                  {stages[activeStage].name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray">{stages[activeStage].description}</p>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-gray">
                Human review remains central. Real tasks require appropriate data, baselines and evaluation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card rounded-card p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="section-label mb-2">Portfolio analytics</p>
                  <h3 className="font-display text-xl font-bold">Illustrative sample distribution</h3>
                </div>
                <span className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-gray">
                  Demonstration · sample data
                </span>
              </div>
              <p className="mb-5 text-sm text-gray">
                Example percentages are for visualisation only and do not describe an actual portfolio.
              </p>
              {chartsVisible ? (
                <Suspense fallback={<div className="h-[360px] animate-pulse rounded-2xl bg-bg" aria-label="Loading sample charts" />}>
                  <DemoCharts />
                </Suspense>
              ) : (
                <div className="h-[360px] rounded-2xl bg-bg" aria-hidden="true" />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
