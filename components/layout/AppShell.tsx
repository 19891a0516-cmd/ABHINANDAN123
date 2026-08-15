'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, ArrowLeft, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import Footer from './Footer';
import Hero from '@/components/sections/Hero';
import Overview from '@/components/sections/Overview';
import Innovations from '@/components/sections/Innovations';
import Projects from '@/components/sections/Projects';
import Evolution from '@/components/sections/Evolution';
import Publications from '@/components/sections/Publications';
import Research from '@/components/sections/Research';
import Team from '@/components/sections/Team';
import CtaBanner from '@/components/sections/CtaBanner';
import Contact from '@/components/sections/Contact';

const navItems = [
  { key: 'overview', label: 'Overview', Component: Overview },
  { key: 'innovations', label: 'Innovations', Component: Innovations },
  { key: 'projects', label: 'Projects', Component: Projects },
  { key: 'evolution', label: 'Evolution', Component: Evolution },
  { key: 'publications', label: 'Publications', Component: Publications },
  { key: 'research', label: 'Applied Research', Component: Research },
  { key: 'team', label: 'Team', Component: Team },
] as const;

type SectionKey = (typeof navItems)[number]['key'];

export default function AppShell() {
  const [active, setActive] = useState<SectionKey>('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [active]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {
      /* ignore */
    }
  };

  const index = navItems.findIndex((n) => n.key === active);
  const goPrev = () => setActive(navItems[(index - 1 + navItems.length) % navItems.length].key);
  const goNext = () => setActive(navItems[(index + 1) % navItems.length].key);

  const Active = navItems[index].Component;

  const handleNavigate = (key: string) => {
    if (navItems.some((n) => n.key === key)) {
      setActive(key as SectionKey);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-ink font-body flex">
      <aside className="hidden lg:flex flex-col justify-between w-72 shrink-0 h-screen sticky top-0 px-7 py-8">
        <div>
          <button onClick={() => setActive('overview')} className="focus-ring rounded-md">
            <Logo />
          </button>

          <nav className="flex flex-col gap-2 mt-10">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`text-left text-sm font-semibold transition-all rounded-full px-3 py-2 focus-ring ${
                  active === item.key
                    ? 'text-white bg-gradient-to-r from-pink to-purple shadow-glow'
                    : 'text-ink/70 hover:text-pink hover:bg-pink/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            aria-label="Previous section"
            className="w-10 h-10 flex items-center justify-center rounded-full text-ink/60 hover:text-pink hover:bg-pink/5 transition-colors focus-ring"
          >
            <ArrowLeft size={16} strokeWidth={2} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next section"
            className="w-10 h-10 flex items-center justify-center rounded-full text-ink/60 hover:text-pink hover:bg-pink/5 transition-colors focus-ring"
          >
            <ArrowRight size={16} strokeWidth={2} />
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled ? 'bg-bg/80 backdrop-blur-xl shadow-soft' : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between px-6 lg:px-10 h-16">
            <button onClick={() => setActive('overview')} className="flex items-center gap-3 lg:hidden focus-ring rounded-md">
              <Logo size={30} />
            </button>

            <div className="hidden lg:block" />

            <div className="hidden lg:flex items-center gap-4">
              <button
                aria-label="Toggle dark mode"
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:text-pink hover:bg-pink/5 transition-colors focus-ring"
              >
                {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
              </button>
              <a href="#contact" className="btn-pill btn-primary !h-11 !px-6 !text-sm focus-ring">
                Book a demo
              </a>
            </div>

            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full focus-ring"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden bg-bg/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setActive(item.key);
                    setMobileOpen(false);
                  }}
                  className={`text-left text-base font-semibold rounded-full px-3 py-2 ${
                    active === item.key ? 'text-white bg-gradient-to-r from-pink to-purple' : 'text-ink'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="flex items-center gap-3 pt-3">
                <button
                  onClick={goPrev}
                  aria-label="Previous section"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-ink/60 focus-ring"
                >
                  <ArrowLeft size={16} strokeWidth={2} />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next section"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-ink/60 focus-ring"
                >
                  <ArrowRight size={16} strokeWidth={2} />
                </button>
              </div>

              <button onClick={toggleTheme} className="flex items-center gap-2 text-sm font-semibold text-ink/80 pt-3">
                {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
                {isDark ? 'Light mode' : 'Dark mode'}
              </button>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-pill btn-primary w-full mt-1"
              >
                Book a demo
              </a>
            </div>
          )}
        </header>

        <main>
          {active === 'overview' && <Hero />}
          <Active />
          <CtaBanner />
          <Contact />
          <Footer onNavigate={handleNavigate} />
        </main>
      </div>
    </div>
  );
}
