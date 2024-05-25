/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter','Sans-serif','system-ui'],
        serif:['Merriweather','serif']
      }
    },
  },
  plugins: [],
}