import Logo from './Logo';
import { footerLinks } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark px-6 pb-10 pt-16 text-white lg:px-10">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" aria-label="RadarSeq home" className="inline-flex rounded-md focus-ring">
              <Logo dark />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Temporal intelligence for a changing business. Connect the evidence. Understand the change. Put it to work.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={`/${item.href}`} className="rounded-sm text-sm text-white/65 hover:text-pink focus-ring">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:info@radarseq.ai" className="rounded-sm text-sm text-white/65 hover:text-pink focus-ring">
                  info@radarseq.ai
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="pt-6 text-xs text-white/40">
          Research results are context-specific and are not guarantees of commercial performance.
        </p>
      </div>
    </footer>
  );
}
