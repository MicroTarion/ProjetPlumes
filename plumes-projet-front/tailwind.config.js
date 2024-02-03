/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'ui': {
          'noir-corbeau': '#021120',
          'vert-naturaliste': '#2D4941',
          'bleu-ciel': '#B6DCFA',
          'blanc-tourterelle': '#F5EFE7',
          'blanc-plume': '#F8F8F8',
        },
        'search': {
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
      },
      backgroundColor: {
        'noir-corbeau': '#021120',
        'vert-naturaliste': '#2D4941',
        'bleu-ciel': '#B6DCFA',
        'blanc-tourterelle': '#F5EFE7',
        'blanc-plume': '#F8F8F8',
        
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
