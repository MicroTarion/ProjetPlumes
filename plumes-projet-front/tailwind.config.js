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
        'blanc': '#FFFFFF',
        'gris': '#808080',
        'gris-bleute': '#B0C4DE',
        'bleu': '#004953',
        'vert': '#008080',
        'jaune': '#FFFF99',
        'rouge': '#FF4500',
        'fauve': '#DAA520',
        'marron': '#8B4513',
        'noir': '#000000',
      },
      // fontSize: {
      //   'h1-poppins': '1rem',
      //   'h2-medium': '26px',
      //   // 'h2-poppins': '18px',
      //   'h3': '18px',
      //   'h4': '16px',
      //   'body': '13px',

      // },
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
