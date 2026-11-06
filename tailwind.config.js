/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#EEF3F0',
          100: '#D5E0D9',
          600: '#2E5245',
          700: '#22453A',
          800: '#1A3429',
          900: '#10231B',
        },
        sand: {
          50: '#FCFAF6',
          100: '#F6F1E7',
          200: '#EBE2D0',
          300: '#D9CAB0',
        },
        brass: {
          300: '#E6CB98',
          400: '#D4AE72',
          500: '#B8894F',
          700: '#7E5626',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out both',
        sheen: 'sheen 1.1s ease-out',
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
