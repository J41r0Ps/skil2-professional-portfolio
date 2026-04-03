/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2f3e46", 
        secondary: "#cad2c5", 
        tertiary: "#354f52", 
        "black-100": "#111111", 
        "black-200": "#000000", 
        "white-100": "#f8fafc", 
        "jairo-accent": "#52796f",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 0, 0, 0.3)", 
      },
      screens: {
        xs: "450px", 
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to bottom right, #2f3e46, #111111)", 
      },
    },
  },
  plugins: [],
};