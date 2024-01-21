/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-main": "#D9D9D6",
        "red-main": "#c8102e",
        "border-main": "#D2D2D2",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(90deg,#444,#838383 3%,#bebebe 5%,#fff 12%,#fff 20%,#a8a8a8 30%,#bebebe 32%,#fff 38%,#9c9c9c 46%,#404040 56%,#626262 60%,#b8b8b8 68%,#ececea 71%,#a1a1a1 80%,#fff 90%,#a1a1a1 94%,#3e3e3e)",
      },
    },
  },
  plugins: [],
};
