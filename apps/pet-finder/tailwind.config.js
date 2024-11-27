const defaultColors = require('tailwindcss/colors');
const baseConfig = require('../../tailwind.config.js');

module.exports = {
  ...baseConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx,scss}'],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        ...baseConfig.theme.extend.colors,
        primary: {
          DEFAULT: defaultColors.blue[500],
          hover: defaultColors.blue[400],
          disabled: defaultColors.blue[200],
          foreground: {
            DEFAULT: defaultColors.white,
            hover: defaultColors.white,
            disabled: defaultColors.gray[300],
          },
        },
      },
    },
  },
  plugins: [],
};
