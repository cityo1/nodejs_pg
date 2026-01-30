/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      mobile: '501px',
      sm: '640px',
      md: '786px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
