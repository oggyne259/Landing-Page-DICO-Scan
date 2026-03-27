/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8A5CFF',
          light: '#B8A4FF',
          dark: '#4A8CFF',
        },
        accent: {
          DEFAULT: '#4A8CFF',
          light: '#7FB3FF',
          dim: 'rgba(127, 179, 255, 0.16)',
        },
        bg: {
          DEFAULT: '#F7F8FF',
          alt: '#EEF3FF',
          dark: '#4A8CFF',
          card: '#FFFFFF',
        },
        fg: {
          DEFAULT: '#1F2554',
          muted: '#4D5780',
          subtle: '#7883AD',
        },
        neutral: {
          border: '#D9E2FF',
          light: '#F1F5FF',
        },
        secondary: {
          orange: '#FF9F6E',
          yellow: '#FFE957',
          red: '#F32B2B',
          green: '#33CD1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-roboto)', 'var(--font-open-sans)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'var(--font-roboto)', 'sans-serif'],
        sub: ['var(--font-lato)', 'var(--font-inter)', 'var(--font-roboto)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'teal': '0 0 40px rgba(127,179,255,0.24), 0 0 80px rgba(184,164,255,0.12)',
        'teal-sm': '0 0 20px rgba(127,179,255,0.24)',
        'card': '0 2px 16px rgba(74,140,255,0.10)',
        'card-lg': '0 12px 48px rgba(74,140,255,0.18)',
        'float': '0 20px 48px rgba(74,140,255,0.20)',
      },
      animation: {
        'scan-beam': 'scanBeam 2s cubic-bezier(0.4,0,0.6,1) infinite alternate',
        'float-a': 'floatA 4s ease-in-out infinite',
        'float-b': 'floatB 5s ease-in-out infinite',
        'float-c': 'floatC 3.5s ease-in-out infinite',
        'scan-ring': 'scanRing 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
