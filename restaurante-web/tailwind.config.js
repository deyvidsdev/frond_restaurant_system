/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'negro-claro' : '#2D2D2D',
        'gris-oscuro' : '#2D2D2D',
        'gris-top-dashboard' : '#525152',
        'gris-bottom-dashboard' : '#343434'
      }
    },
  },
  plugins: [],
}

