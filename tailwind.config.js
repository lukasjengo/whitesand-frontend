const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', ...defaultTheme.fontFamily.serif],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          DEFAULT: '#ECE9E4',
        },
        black: {
          DEFAULT: '#111111',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
