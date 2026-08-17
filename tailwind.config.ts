import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00BFB3',
          cyanLight: '#26D9CC',
          cyanLighter: '#5FF0E5',
          cyanDark: '#008C82',
          cyanDarker: '#005953',
          red: '#FF0000',
          slate: '#0F172A',
          fog: '#F8FAFC',
          navy: '#000000',
          navyLight: '#050A0F',
          navyTeal: '#031210',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.12)',
        glow: '0 0 60px rgba(0, 191, 179, 0.35)',
        glowLg: '0 0 100px rgba(0, 191, 179, 0.4)',
        glowRed: '0 0 60px rgba(255, 0, 0, 0.4)',
        glowRedLg: '0 0 100px rgba(255, 0, 0, 0.45)',
        card: '0 4px 24px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
