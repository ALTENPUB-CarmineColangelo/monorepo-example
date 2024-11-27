const baseConfig = require('../../tailwind.config.js');

module.exports = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      fontFamily: {
        ...baseConfig.theme.extend.fontFamily,
        larken: '"larken", Arial, sans-serif',
      }
    },
  },
  plugins: [],
}

