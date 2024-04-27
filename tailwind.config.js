/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#23272F",
      "light-black": "#404756",
      white: "#F6F7F9",
      "dim-black": "#191B21",
      "blue-700": "#1d4ed8",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [daisyui],
};
