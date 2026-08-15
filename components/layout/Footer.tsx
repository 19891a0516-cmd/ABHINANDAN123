'use client';

import Logo from './Logo';
import { footerLinks } from '@/lib/data';

const sectionKeys = new Set([
  'overview',
  'innovations',
  'projects',
  'pricing',
  'evolution',
  'publications',
  'research',
  'testimonials',
  'team',
]);

export default function Footer({ onNavigate }: { onNavigate?: (key: string) => void }) {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6 lg:px-10">
      <div className="max-w-container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div>
            <button onClick={() => onNavigate?.('overview')} className="focus-ring rounded-md">
              <Logo dark />
            </button>
            <p className="text-white/45 text-sm mt-4 leading-relaxed max-w-[240px]">
              Temporal predictive intelligence for portfolios that can&apos;t afford to wait for a
              snapshot.
            </p>
          </div>

          <FooterCol title="Quick Links" links={footerLinks.quick} onNavigate={onNavigate} />
          <FooterCol title="Resources" links={footerLinks.resources} onNavigate={onNavigate} />
          <FooterCol title="Research & Contact" links={footerLinks.research} onNavigate={onNavigate} />
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/35">
          <p>© 2026 RadarSeq · University of East London Centre for FinTech</p>
          <p>
            Sources: RadarSeq (ACM/Springer, 2025) · RadarSeq briefing, May 2026 · Predicting
            Courier Churn, S. Patel, UEL
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: { label: string; href: string }[];
  onNavigate?: (key: string) => void;
}) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 font-bold mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => {
          const key = l.href.startsWith('#') ? l.href.slice(1) : '';
          if (sectionKeys.has(key)) {
            return (
              <li key={l.label}>
                <button
                  onClick={() => onNavigate?.(key)}
                  className="text-white/60 text-sm hover:text-pink transition-colors text-left"
                >
                  {l.label}
                </button>
              </li>
            );
          }
          return (
            <li key={l.label}>
              <a href={l.href} className="text-white/60 text-sm hover:text-pink transition-colors">
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
