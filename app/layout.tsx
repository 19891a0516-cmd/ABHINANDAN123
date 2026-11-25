import type { Metadata } from 'next';
import { Inter, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const accentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-accent-serif',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RadarSeq — Temporal Risk Intelligence',
    template: '%s | RadarSeq',
  },
  description:
    'RadarSeq research connects behavioural histories over time to help teams understand changing risk, inspect evidence and shape decisions.',
  metadataBase: new URL('https://dyavathiabhinandan.github.io/Radarseq123/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RadarSeq — Temporal Risk Intelligence',
    description:
      'Research into temporal modelling, changing risk and evidence-led decision workflows.',
    type: 'website',
    url: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${accentSerif.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
  var t = localStorage.getItem('theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-ink font-body">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
