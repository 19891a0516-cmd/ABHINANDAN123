'use client';

import Reveal from '@/components/ui/Reveal';
import TiltCard from '@/components/ui/TiltCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { team } from '@/lib/data';

const teamColor = 'rgb(var(--color-accent))';

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
          <div className="section-label mb-4">Our team</div>
          <h2 className="font-display max-w-3xl mx-auto">
            The people behind <span className="editorial-accent">RadarSeq.</span>
          </h2>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mx-auto mt-6">
            <circle cx="28" cy="10" r="4" fill="rgb(var(--color-accent))" />
            <circle cx="16" cy="30" r="4" fill="rgb(var(--color-accent))" />
            <circle cx="28" cy="30" r="4.5" fill="rgb(var(--color-accent))" />
            <circle cx="44" cy="30" r="4" fill="rgb(var(--color-accent))" />
            <path d="M28 14V27M20 27L28 14L28 27" stroke="rgb(var(--color-border) / var(--color-border-alpha))" strokeWidth="1.4" />
            <path d="M28 27L40 27L28 14" stroke="rgb(var(--color-border) / var(--color-border-alpha))" strokeWidth="1.4" />
          </svg>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => {
            const isAbhinandan = m.name === 'Abhinandan Dyavathi';
            const color = teamColor;
            const card = (
              <TiltCard
                className={`card h-full rounded-card border-t-[3px] p-7 pt-6 text-center ${
                  isAbhinandan ? 'transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow' : ''
                }`}
                style={{ borderTopColor: color }}
                max={10}
              >
                <div
                  className="mx-auto mb-5 mt-2 flex h-16 w-16 items-center justify-center rounded-full font-display text-lg font-bold text-bg"
                  style={{ background: color }}
                >
                  {initials(m.name)}
                </div>
                <h3 className="mb-1.5 font-display">
                  {isAbhinandan ? 'ABHINANDAN DYAVATHI' : m.name}
                </h3>
                {isAbhinandan ? (
                  <>
                    <p className="text-xs font-semibold leading-relaxed text-ink/70">
                      Software Developer • AI / ML Researcher
                    </p>
                    <p className="mt-2 text-xs text-gray">London, United Kingdom</p>
                    <p className="mt-4 text-sm leading-relaxed text-gray">
                      Software Developer and MSc Computer Science researcher focused on software engineering, artificial intelligence, machine learning, full-stack development, and data-driven systems.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-pink">
                      View Profile
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </>
                ) : (
                  <p className="text-xs font-semibold leading-relaxed" style={{ color }}>
                    {m.role}
                  </p>
                )}
              </TiltCard>
            );

            return (
              <Reveal key={m.name} delay={(i % 4) * 0.06}>
                {isAbhinandan ? (
                  <Link href="/team/abhinandan-dyavathi" className="group block h-full rounded-card">
                    {card}
                  </Link>
                ) : 'href' in m && m.href ? (
                  <a href={m.href} target="_blank" rel="noreferrer" className="group block h-full rounded-card focus-ring">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
