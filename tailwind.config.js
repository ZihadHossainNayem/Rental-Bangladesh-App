/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fuchsiaPink: "#ff385c",
        darkCol: "#18191a",
      },
      screens: {
        "4xl": "1650px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
