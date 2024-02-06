/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ui: {
          "noir-corbeau": "#021120",
          "vert-naturaliste": "#2D4941",
          "bleu-ciel": "#B6DCFA",
          "blanc-tourterelle": "#F5EFE7",
          "blanc-plume": "#F8F8F8",
        },
        search: {
          blanc: "var(--color-search-blanc)",
          gris: "var(--color-search-gris)",
          "gris-bleute": "var(--color-search-gris-bleute)",
          bleu: "var(--color-search-bleu)",
          vert: "var(--color-search-vert)",
          jaune: "var(--color-search-jaune)",
          rouge: "var(--color-search-rouge)",
          orange: "var(--color-search-orange)",
          fauve: "var(--color-search-fauve)",
          marron: "var(--color-search-marron)",
          noir: "var(--color-search-noir)",
        },
      },
      backgroundColor: {
        "noir-corbeau": "#021120",
        "vert-naturaliste": "#2D4941",
        "bleu-ciel": "#B6DCFA",
        "blanc-tourterelle": "#F5EFE7",
        "blanc-plume": "#F8F8F8",
      },
      borderColor: {
        "ui-noir-corbeau": "#021120",
        "ui-vert-naturaliste": "#2D4941",
        "ui-blanc-tourterelle": "#F5EFE7",
        "ui-blanc-plume": "#F8F8F8",
      },
      textColor: {
        "ui-noir-corbeau": "#021120",
        "ui-vert-naturaliste": "#2D4941",
        "ui-blanc-plume": "#F8F8F8",
      },
      fontFamily: {
        "f37-attila": ["F37Attila", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        medium: "500",
        regular: "400",
      },
    },
  },
  plugins: [],
};
