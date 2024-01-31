/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'noir-corbeau': '#021120',
        'vert-naturaliste': '#2D4941',
        'bleu-ciel': '#B6DCFA',
        'blanc-tourterelle': '#F5EFE7',
        'blanc-plume': '#F8F8F8',
      },
      fontSize: {
        'h1': '30px',
        'h2-medium': '26px',
        'h2-poppins': '19px',
        'h3': '18px',
        'h4': '16px',
        'body': '13px',
      },
      fontFamily: {
        'f37-attila': ['F37 Attila', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'medium': '500',
        'regular': '400',
      },
    },
  },
  plugins: [],
}
