/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.html",
    "./ecommerce/*.html",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
