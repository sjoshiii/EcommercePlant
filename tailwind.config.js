/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#2D6A4F",
        mint: "#95D5B2",
        sage: "#B7C9A8",
        beige: "#F6E7CB",
        clay: "#B08968",
        charcoal: "#2C3639",
        blush: "#F6C6C2",
        softwhite: "#F8F9FA",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        prata: ['Prata', 'serif'],
      }
    },
  },
  plugins: [],
}
