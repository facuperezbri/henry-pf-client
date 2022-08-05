/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#FF5F6D',
        'primary-white': '#FFFFFF',
        'main-bg': 'var(--main-bg)'
      },
      width: {
        'fullscreen': '800px'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
