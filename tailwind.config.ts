import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        dark: '#0A0A0A',
        pink: {
          DEFAULT: '#FF4F87',
          soft: '#FF7BA6',
        },
        accent: {
          blue: '#3D5AFE',
          purple: '#5B4BFF',
          teal: '#00C2A8',
          gold: '#D4A017',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Manrope', 'Inter', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        card: '24px',
        pill: '999px',
      },
      maxWidth: {
        container: '1400px',
        prose: '800px',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(10,10,10,0.04), 0 1px 2px rgba(10,10,10,0.03)',
        card: '0 8px 30px rgba(10,10,10,0.06)',
        'card-hover': '0 20px 48px rgba(10,10,10,0.12)',
        glow: '0 8px 30px rgba(255,79,135,0.35)',
        'glow-purple': '0 8px 30px rgba(91,75,255,0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        meshShift: {
          '0%, 100%': { backgroundPosition: '0% 0%, 100% 100%, 50% 50%' },
          '50%': { backgroundPosition: '20% 10%, 80% 90%, 60% 40%' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        floaty: 'floaty 6s ease-in-out infinite',
        mesh: 'meshShift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
