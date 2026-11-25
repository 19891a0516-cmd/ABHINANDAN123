import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        alternative: 'rgb(var(--color-alt) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        heading: 'rgb(var(--color-heading) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        mutedText: 'rgb(var(--color-muted-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        button: {
          DEFAULT: 'rgb(var(--color-button) / <alpha-value>)',
          text: 'rgb(var(--color-button-text) / <alpha-value>)',
        },
        hover: 'rgb(var(--color-hover) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        dark: 'rgb(var(--color-alt) / <alpha-value>)',
        pink: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'rgb(var(--color-primary) / <alpha-value>)',
        },
        purple: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          soft: 'rgb(var(--color-accent) / <alpha-value>)',
        },
        accent: {
          blue: '#8D6846',
          purple: '#B38A5C',
          teal: '#887969',
          gold: '#A98258',
        },
      },
      fontFamily: {
        display: ['var(--font-body)', 'Inter', 'Arial', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'Arial', 'sans-serif'],
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
        soft: '0 2px 12px rgba(69,56,45,0.05), 0 1px 2px rgba(69,56,45,0.03)',
        card: '0 8px 30px rgba(69,56,45,0.07)',
        'card-hover': '0 20px 48px rgba(69,56,45,0.12)',
        glow: '0 8px 30px rgba(169,130,88,0.2)',
        'glow-purple': '0 8px 30px rgba(141,104,70,0.18)',
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
