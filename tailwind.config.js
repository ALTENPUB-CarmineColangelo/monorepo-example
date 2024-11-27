/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx,scss}', // Percorso ai file sorgente dell'app
    './libs/**/*.{js,ts,jsx,tsx,scss}', // Percorso per eventuali librerie condivise
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: defaultColors.red[500],
          hover: defaultColors.red[400],
          disabled: defaultColors.red[200],
          foreground: {
            DEFAULT: defaultColors.white,
            hover: defaultColors.white,
            disabled: defaultColors.gray[300],
          },
        },
        secondary: {
          DEFAULT: defaultColors.stone[200],
          hover: defaultColors.stone[100],
          disabled: defaultColors.stone[200],
          foreground: {
            DEFAULT: defaultColors.stone[900],
            hover: defaultColors.black,
            disabled: defaultColors.stone[600],
          },
        },
      },
      fontFamily: {
        calibre: '"Calibre", Impact, Arial, sans-serif', // todo togliere impact
      },
      borderRadius: {
        button: defaultTheme.borderRadius.full,
        card: defaultTheme.borderRadius.none,
        'input-text': defaultTheme.borderRadius.full,
        textarea: '1.25rem',
      },
    },
  },
  plugins: [],
};
