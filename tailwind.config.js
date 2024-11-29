/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5b5d9d',
          secondary: '#4a4c7f',
          accent: '#8083c9',
          light: '#9597d1',
          dark: '#363756'
        }
      }
    },
  },
  plugins: [],
};