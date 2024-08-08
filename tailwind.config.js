/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container:{
      center: true,
      padding: "16px"
    },
    extend: {
      colors:{
        primary: '#512D6D',
        bg: "#EEEEEE",
        secondary: "#64748b",
        font: "#0f172a",
        dark: "#1e293b",
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

