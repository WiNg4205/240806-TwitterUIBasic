/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderGray: "#2f3336",
        hoverGray: "#181818",
        xBlue: "#1d9bf0"
      }
    },
  },
  plugins: [],
}

