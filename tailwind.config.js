/** @type {import('tailwindcss').Config} */

  // tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        forest: "#2D6A4F",    // Forest Green
        mint: "#95D5B2",      // Mint Green
        sage: "#B7C9A8",      // Sage
        beige: "#F6E7CB",     // Warm Beige
        clay: "#B08968",      // Clay Brown
        charcoal: "#2C3639",  // Charcoal
        blush: "#F6C6C2",     // Blush Pink
        softwhite: "#F8F9FA", // Soft White
      },
    },
  },
  plugins: [],
};

