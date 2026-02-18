/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#2563eb',
          dark: '#3b82f6',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'blob': 'blob 12s infinite ease-in-out',
        'blob-delay': 'blob 14s infinite ease-in-out 3s',
        'blob-delay2': 'blob 16s infinite ease-in-out 6s',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(40px, -30px) scale(1.08)' },
          '50%': { transform: 'translate(-20px, 40px) scale(0.95)' },
          '75%': { transform: 'translate(30px, 20px) scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}
