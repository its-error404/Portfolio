/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-light': ['Montserrat', 'sans-serif','100'],
        'montserrat-normal': ['Montserrat', 'sans-serif','300'],
        'montserrat-regular': ['Montserrat', 'sans-serif','400'],
    },
    colors: {
      'color-back': '#ECF1FD'
    }
  }
},
  plugins: [],
}