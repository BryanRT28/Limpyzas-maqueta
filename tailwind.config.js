/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./admin/**/*.html",
    "./data/**/*.json"
  ],
  theme: {
    extend: {
      colors: {
        marca: {
          teal: '#1A9E96',
          tealDark: '#137A74',
          green: '#8BC53F',
          forest: '#1B4D3E',
          light: '#F4F9F8',
          dark: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}