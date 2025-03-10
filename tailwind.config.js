/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#FFAD1F',
        danger: '#E0245E',
      },
      spacing: {
        '80vh': '80vh',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [ [require("@tailwindcss/forms")],],
}

