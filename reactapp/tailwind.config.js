/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "sans-serif"],
      },
      screens: {
        xs: "0px",
      },
    },
  },
  plugins: [],
};
