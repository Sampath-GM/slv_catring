import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        card: {
          DEFAULT: 'rgb(var(--background))',
          foreground: 'rgb(var(--foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--background))',
          foreground: 'rgb(var(--foreground))',
        },
        primary: {
          DEFAULT: 'rgb(var(--gold))',
          foreground: 'rgb(var(--gold-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--gold))',
          foreground: 'rgb(var(--gold-foreground))',
        },
        destructive: {
          DEFAULT: 'rgb(var(--gold))',
          foreground: '#ffffff',
        },
        border: 'rgb(var(--border))',
        input: 'rgb(var(--border))',
        ring: 'rgb(var(--gold))',
        chart: {
          '1': 'rgb(var(--gold))',
          '2': 'rgb(var(--green))',
          '3': 'rgb(var(--brown))',
          '4': 'rgb(var(--gold))',
          '5': 'rgb(var(--green))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
