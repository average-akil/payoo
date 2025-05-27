/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // ✅ Scans all HTML & JS files in the src folder
    "./public/index.html",  // ✅ Includes index.html in the public folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // ✅ Custom primary color
        secondary: "#9333EA", // ✅ Custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // ✅ Custom font
      },
    },
  },
  plugins: [],
};