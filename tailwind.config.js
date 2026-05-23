/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2B4A',
          deep: '#0F1A2E',
          light: '#243659',
        },
        teal: {
          DEFAULT: '#00B4A6',
          sky: '#CCFAF7',
          dark: '#008F84',
        },
        mist: '#9CA3AF',
        orange: {
          drive: '#E85D26',
        },
        green: {
          trust: '#2D6A4F',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'display-sm': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      borderRadius: {
        brand: '8px',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(26,43,74,0.08)',
        'card-hover': '0 8px 32px 0 rgba(26,43,74,0.16)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1A2B4A 0%, #0F1A2E 60%, #00B4A6 100%)',
        'teal-gradient': 'linear-gradient(135deg, #00B4A6 0%, #008F84 100%)',
        'navy-gradient': 'linear-gradient(180deg, #1A2B4A 0%, #0F1A2E 100%)',
      },
    },
  },
  plugins: [],
}
