'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
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
  loading: () => <div className="min-h-96 animate-pulse rounded-3xl bg-secondary" aria-label="Loading demonstration" />,
});

export default function AppShell() {
  const [active, setActive] = useState('#about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const restoreFocusOnClose = useRef(true);

  const closeMenu = (restoreFocus = true) => {
    restoreFocusOnClose.current = restoreFocus;
    setMobileOpen(false);
  };

  useEffect(() => {
    setLightMode(document.documentElement.classList.contains('light'));

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

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const menuTrigger = mobileMenuTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    mobileMenuRef.current?.querySelector<HTMLElement>('#mobile-navigation a')?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        restoreFocusOnClose.current = true;
        setMobileOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) return;

      const focusable = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => element.getClientRects().length > 0);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || !mobileMenuRef.current.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !mobileMenuRef.current.contains(current))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (restoreFocusOnClose.current) menuTrigger?.focus();
      restoreFocusOnClose.current = true;
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const nextLightMode = !document.documentElement.classList.contains('light');
    document.documentElement.classList.toggle('light', nextLightMode);
    document.documentElement.classList.remove('dark');
    setLightMode(nextLightMode);
    try {
      localStorage.setItem('theme', nextLightMode ? 'light' : 'dark');
    } catch (error) {
      console.error('Unable to save the theme preference.', error);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-bg text-ink">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header sticky top-0 z-50 border-b border-border/70 bg-bg/90 backdrop-blur-xl ${isScrolled ? 'site-header-scrolled' : ''} ${mobileOpen ? 'site-header-menu-open' : ''}`}>
        <div className="mx-auto grid min-h-16 max-w-[1800px] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 px-4 sm:px-5 lg:px-8 xl:grid-cols-[172px_minmax(0,1fr)_auto] xl:gap-x-[18px] xl:px-6">
          <a href="#home" aria-label="RadarSeq home" onClick={() => closeMenu(false)} className="site-header-brand min-w-[160px] shrink-0 rounded-md focus-ring">
            <Logo />
          </a>
          <nav aria-label="Main" className="site-header-desktop-nav hidden min-w-0 items-center justify-center xl:flex">
            <div className="site-header-nav-list flex min-w-0 items-center justify-center">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active === item.href ? 'page' : undefined}
                  className="nav-link focus-ring rounded-full transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="site-header-actions flex shrink-0 items-center justify-self-end gap-2">
            <button
              type="button"
              className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-ink transition-colors hover:bg-secondary"
              aria-label={lightMode ? 'Use dark theme' : 'Use light theme'}
              aria-pressed={lightMode}
              title={lightMode ? 'Use dark theme' : 'Use light theme'}
              onClick={toggleTheme}
            >
              {lightMode ? <Moon size={19} aria-hidden="true" /> : <Sun size={19} aria-hidden="true" />}
            </button>
            <button
              ref={mobileMenuTriggerRef}
              type="button"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-secondary xl:hidden"
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-haspopup="dialog"
              onClick={() => (mobileOpen ? closeMenu() : setMobileOpen(true))}
            >
              <Menu size={21} aria-hidden="true" />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div
            className="mobile-navigation-backdrop xl:hidden"
            onPointerDown={(event) => {
              if (event.target === event.currentTarget) closeMenu();
            }}
          >
            <div
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-title"
              className="mobile-navigation-dialog"
            >
              <div className="mobile-navigation-header">
                <a href="#home" aria-label="RadarSeq home" onClick={() => closeMenu(false)} className="rounded-md focus-ring">
                  <Logo />
                </a>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-secondary"
                    aria-label={lightMode ? 'Use dark theme' : 'Use light theme'}
                    aria-pressed={lightMode}
                    title={lightMode ? 'Use dark theme' : 'Use light theme'}
                    onClick={toggleTheme}
                  >
                    {lightMode ? <Moon size={19} aria-hidden="true" /> : <Sun size={19} aria-hidden="true" />}
                  </button>
                  <button
                    type="button"
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-secondary"
                    aria-label="Close navigation"
                    onClick={() => closeMenu()}
                  >
                    <X size={21} aria-hidden="true" />
                  </button>
                </div>
              </div>
              <h2 id="mobile-navigation-title" className="sr-only">Navigation</h2>
              <nav id="mobile-navigation" aria-label="Main" className="mobile-navigation-links">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={active === item.href ? 'page' : undefined}
                    onClick={() => closeMenu(false)}
                    className="mobile-navigation-link focus-ring"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
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
