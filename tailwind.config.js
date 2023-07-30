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
        'Raleway': ['Raleway', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'BebasNeue': ['Bebas Neue', 'sans-serif'],
    },
    colors: {
      'color-back': '#ECF1FD',
    },
    animation: ['motion-safe']
  }
},
  plugins: [],
}