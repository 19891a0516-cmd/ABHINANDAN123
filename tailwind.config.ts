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
        'surface-alt': 'rgb(var(--color-alt) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        heading: 'rgb(var(--color-heading) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)',
        buttonText: 'rgb(var(--color-button-text) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        mutedText: 'rgb(var(--color-muted-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        button: {
          DEFAULT: 'rgb(var(--color-button) / <alpha-value>)',
          text: 'rgb(var(--color-button-text) / <alpha-value>)',
        },
        hover: 'rgb(var(--color-hover) / <alpha-value>)',
        border: 'rgb(var(--color-border) / calc(<alpha-value> * var(--color-border-alpha)))',
        dark: 'rgb(var(--color-alt) / <alpha-value>)',
        'surface-overlay': 'rgb(var(--color-surface-overlay) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / 0.14)',
          strong: 'rgb(var(--color-accent-strong) / <alpha-value>)',
          blue: 'rgb(var(--color-node-blue) / <alpha-value>)',
          purple: 'rgb(var(--color-node-violet) / <alpha-value>)',
          teal: 'rgb(var(--color-risk-stable) / <alpha-value>)',
          gold: 'rgb(var(--color-risk-drift) / <alpha-value>)',
        },
        risk: {
          stable: 'rgb(var(--color-risk-stable) / <alpha-value>)',
          drift: 'rgb(var(--color-risk-drift) / <alpha-value>)',
          squeeze: 'rgb(var(--color-risk-squeeze) / <alpha-value>)',
          stress: 'rgb(var(--color-risk-stress) / <alpha-value>)',
          distress: 'rgb(var(--color-risk-distress) / <alpha-value>)',
        },
        pink: {
          DEFAULT: 'rgb(var(--color-accent-strong) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft) / 0.14)',
          bright: 'rgb(var(--color-accent) / <alpha-value>)',
        },
        purple: {
          DEFAULT: 'rgb(var(--color-node-violet) / <alpha-value>)',
          soft: 'rgb(var(--color-node-violet) / <alpha-value>)',
        },
        node: {
          teal: 'rgb(var(--color-risk-stable) / <alpha-value>)',
          yellow: 'rgb(var(--color-risk-drift) / <alpha-value>)',
          orange: 'rgb(var(--color-risk-squeeze) / <alpha-value>)',
          blue: 'rgb(var(--color-node-blue) / <alpha-value>)',
          violet: 'rgb(var(--color-node-violet) / <alpha-value>)',
          red: 'rgb(var(--color-node-red) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'Arial', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'type-display': [
          'var(--type-display-size)',
          { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '300' },
        ],
        'type-section': [
          'var(--type-section-size)',
          { lineHeight: 'var(--type-section-line-height)', letterSpacing: '-0.025em', fontWeight: '300' },
        ],
        'type-subheading': [
          'var(--type-subheading-size)',
          { lineHeight: '1.333', letterSpacing: '-0.025em', fontWeight: '400' },
        ],
        'type-hero-copy': [
          'var(--type-hero-copy-size)',
          { lineHeight: '1.625', fontWeight: '400' },
        ],
        'type-body': ['16px', { lineHeight: '1.625', fontWeight: '400' }],
        'type-label': [
          'var(--type-label-size)',
          { lineHeight: '1.5', letterSpacing: '0.18em', fontWeight: '400' },
        ],
        'type-nav': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '400' }],
        'type-button': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '400' }],
        'type-price': ['36px', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '300' }],
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
        soft: '0 2px 12px rgb(10 8 30 / 0.3), 0 1px 2px rgb(10 8 30 / 0.25)',
        card: '0 12px 36px rgb(10 8 30 / 0.35)',
        'card-hover': '0 18px 42px rgb(10 8 30 / 0.48), 0 0 28px rgb(var(--color-accent) / 0.12)',
        glow: '0 8px 30px rgb(var(--color-accent) / 0.14)',
        'glow-purple': '0 8px 30px rgb(var(--color-node-violet) / 0.18)',
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
