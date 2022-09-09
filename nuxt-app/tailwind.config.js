/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/scss/**/*.{html,js}",  "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"],  theme: {
    extend: {},

  },
  variants: {
    extend: {
      color:{
        'gg-color': '#f2f3ee',
      }
    },
  }
}
