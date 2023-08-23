/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#006D77',
        'light-green': '#83C5BE',
        'white-green': '#EDF6F9',
        'light-orange': '#FFDDD2',
        'dark-orange': '#E29578',
      },
      borderRadius:{
        '15':'15px',
        '25':'25px'
      },
      fontFamily:{
        'rubik': ['Rubik']
      },
    },
  },
  plugins: [],
  important: true,
}

