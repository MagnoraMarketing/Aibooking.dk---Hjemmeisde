/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        ink: {
          50: '#f8f7fb',
          100: '#efedf5',
          200: '#dcd8e8',
          300: '#b8b1cf',
          400: '#8b81a8',
          600: '#4a4266',
          700: '#372f52',
          800: '#241c3d',
          900: '#160f2b',
          950: '#0c081a',
        },
      },
    },
  },
  plugins: [],
};
