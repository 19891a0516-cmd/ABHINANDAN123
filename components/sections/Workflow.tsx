'use client';

import Reveal from '@/components/ui/Reveal';
import { workflow } from '@/lib/data';

export default function Workflow() {
  return (
    <section id="architecture" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Technology & architecture</div>
          <h2 className="font-display font-bold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            A research workflow built around temporal evidence.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6">
          {workflow.map((w, i) => (
            <Reveal key={w.step} delay={i * 0.08}>
              <div className="card p-8 h-full relative rounded-card">
                <div className="font-mono text-xs text-pink font-bold mb-4">STEP {i + 1}</div>
                <h3 className="font-display font-bold text-lg mb-2">{w.step}</h3>
                <p className="text-gray text-sm leading-relaxed">{w.body}</p>
                {i < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-border text-2xl">
                    →
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <div className="card rounded-card p-7 md:p-9">
            <p className="section-label mb-3">Two distinct model paths</p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-bold">RadarSeq v1</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  Dated behavioural features are represented as radar-chart images, encoded with a CNN and
                  modelled over time with a bidirectional LSTM.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">RadarSeq++</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  Aligned feature sequences are processed directly with Mamba/state-space modelling, sliding-window
                  attention and SwiGLU. The manuscript describes histories of up to 275 active days.
                </p>
              </div>
            </div>
            <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-gray">
              These are separate research architectures and evaluation setups, not production deployments or a
              controlled like-for-like benchmark.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
