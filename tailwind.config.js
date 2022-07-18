/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.html",
    "./ecommerce/*.html",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        success: "#34D399",
        error: "#B45454",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
