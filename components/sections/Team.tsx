'use client';

import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';
import { team } from '@/lib/data';

function initials(name: string) {
  return name
    .replace('Dr ', '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
}

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Team</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            The people behind RadarSeq.
          </h2>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mx-auto mt-6">
            <circle cx="28" cy="10" r="4" fill="#3D5AFE" />
            <circle cx="16" cy="30" r="4" fill="#00C2A8" />
            <circle cx="28" cy="30" r="4.5" fill="#FF4F87" />
            <circle cx="44" cy="30" r="4" fill="#D4A017" />
            <path d="M28 14V27M20 27L28 14L28 27" stroke="#DDDDDD" strokeWidth="1.4" />
            <path d="M28 27L40 27L28 14" stroke="#DDDDDD" strokeWidth="1.4" />
          </svg>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.06}>
              <TiltCard className="card p-7 pt-6 h-full text-center border-t-[3px] rounded-card" style={{ borderTopColor: m.color } as React.CSSProperties} max={10}>
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-5 mt-2 flex items-center justify-center text-white font-display font-bold text-lg"
                  style={{ background: m.color }}
                >
                  {initials(m.name)}
                </div>
                <h3 className="font-display font-bold text-[15px] leading-snug mb-1.5">{m.name}</h3>
                <p className="text-xs font-semibold leading-relaxed" style={{ color: m.color }}>
                  {m.role}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
