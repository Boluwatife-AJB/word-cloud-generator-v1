/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      // 'nunito-serif': ['Nunito sans', 'sans-serif'],
      'lato-sans': ['Lato', 'sans-serif'],
    },
    screens: {
      xsm: '246px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
