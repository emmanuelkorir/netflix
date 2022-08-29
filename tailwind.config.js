/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
};
