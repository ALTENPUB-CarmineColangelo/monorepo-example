/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,scss}", // Percorso ai file sorgente dell'app
    "./libs/**/*.{js,ts,jsx,tsx,scss}" // Percorso per eventuali librerie condivise
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

