import type { Metadata } from 'next';
import { Manrope, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';

const display = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RadarSeq — AI Risk Intelligence Platform',
  description:
    'RadarSeq blends academic-grade temporal AI with enterprise decisioning to detect risk before it becomes loss, churn, or regulatory exposure.',
  metadataBase: new URL('https://radarseq.ai'),
  openGraph: {
    title: 'RadarSeq — AI Risk Intelligence Platform',
    description:
      'RadarSeq blends academic-grade temporal AI with enterprise decisioning to detect risk before it becomes loss, churn, or regulatory exposure.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
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
