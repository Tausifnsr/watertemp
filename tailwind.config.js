/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        },
        'custom1': ["Custom-1", "sans-serif"],
        
      colors: {
        light: "#6d6d6f",
        main_dark:"#3d3d3f",
        dark: "#2e3845",
        color1: "#000046",
        color2: "#1CB5E0"
      },

      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
}