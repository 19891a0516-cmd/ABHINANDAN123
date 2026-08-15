'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '@/components/ui/Reveal';
import { dashboardBars, endpoints } from '@/lib/data';

const barColors = ['#3D5AFE', '#3D5AFE', '#3D5AFE', '#00C2A8', '#00C2A8', '#FF4F87', '#FF4F87'];

export default function Dashboard() {
  const max = Math.max(...dashboardBars);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const bars = barsRef.current?.querySelectorAll<HTMLDivElement>('[data-bar]');
      if (!bars) return;
      gsap.from(bars, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: barsRef.current,
          start: 'top 85%',
        },
      });
    }, barsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="dashboard" className="py-24 px-6 lg:px-10 bg-dark text-white">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">API Dashboard</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Monitor <span className="italic-pink">every prediction</span> in real time.
          </h2>
        </Reveal>

        <Reveal>
          <div className="card-dark p-6 md:p-10 rounded-card">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
              <h3 className="font-display font-semibold text-lg">Prediction volume — last 7 days</h3>
              <span className="flex items-center gap-2 text-xs font-mono font-bold text-accent-teal bg-accent-teal/12 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />
                LIVE
              </span>
            </div>

            <div ref={barsRef} className="flex items-end gap-3 md:gap-5 h-40 mb-10">
              {dashboardBars.map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    data-bar
                    className="w-full rounded-t-lg"
                    style={{ height: `${(v / max) * 100}%`, background: barColors[i] }}
                  />
                  <span className="text-[11px] font-mono text-white/35">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-sm min-w-[520px]">
                <thead>
                  <tr className="text-left text-white/40 font-mono text-xs uppercase tracking-wider border-b border-white/10">
                    <th className="pb-3 px-2 font-medium">Endpoint</th>
                    <th className="pb-3 px-2 font-medium">Calls</th>
                    <th className="pb-3 px-2 font-medium">Latency</th>
                    <th className="pb-3 px-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {endpoints.map((e) => (
                    <tr key={e.path} className="border-b border-white/5 last:border-0">
                      <td className="py-4 px-2 font-mono">{e.path}</td>
                      <td className="py-4 px-2 text-white/60">{e.calls}</td>
                      <td className="py-4 px-2 text-white/60">{e.latency}</td>
                      <td className="py-4 px-2">
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{
                            background: e.status === 'Healthy' ? '#00C2A820' : '#D4A01720',
                            color: e.status === 'Healthy' ? '#00C2A8' : '#D4A017',
                          }}
                        >
                          {e.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
