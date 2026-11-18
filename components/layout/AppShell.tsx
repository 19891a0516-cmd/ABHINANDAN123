'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import Logo from './Logo';
import Footer from './Footer';
import Hero from '@/components/sections/Hero';
import Overview from '@/components/sections/Overview';
import Innovations from '@/components/sections/Innovations';
import Projects from '@/components/sections/Projects';
import Evolution from '@/components/sections/Evolution';
import Publications from '@/components/sections/Publications';
import Research from '@/components/sections/Research';
import Impact from '@/components/sections/Impact';
import Workflow from '@/components/sections/Workflow';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import EnterpriseApplications from '@/components/sections/EnterpriseApplications';

const LiveDemo = dynamic(() => import('@/components/sections/LiveDemo'), {
  ssr: false,
  loading: () => <div className="min-h-96 animate-pulse rounded-3xl bg-slate-100" aria-label="Loading demonstration" />,
});

export default function AppShell() {
  const [active, setActive] = useState('#about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-bg text-ink">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-8">
          <a href="#home" aria-label="RadarSeq home" onClick={closeMenu} className="shrink-0 rounded-md focus-ring">
            <Logo />
          </a>
          <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href ? 'location' : undefined}
                className={`nav-link rounded-full px-3 py-2 text-sm font-semibold transition-colors focus-ring ${
                  active === item.href ? 'bg-pink/10 text-pink' : 'text-ink/70 hover:bg-pink/5 hover:text-pink'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-pill btn-primary !hidden !h-11 !px-5 !text-sm focus-ring xl:!inline-flex">
            Discuss your use case
          </a>
          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full xl:hidden"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {mobileOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-bg px-5 py-4 xl:hidden">
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active === item.href ? 'location' : undefined}
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold focus-ring ${
                    active === item.href ? 'bg-pink/10 text-pink' : 'text-ink/75 hover:bg-pink/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="main">
        <Hero />
        <Overview />
        <Innovations />
        <Projects />
        <Evolution />
        <Publications />
        <Research />
        <Impact />
        <Workflow />
        <LiveDemo />
        <EnterpriseApplications />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}
