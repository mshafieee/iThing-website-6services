/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 500: '#2563EB', 600: '#1D4ED8', 700: '#1E40AF' },
        navy: { 900: '#0A1628', 800: '#0D1F3C', 700: '#152848' },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Arabic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
