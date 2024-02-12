/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      "fira-sans": ["Fira Sans", "sans-serif"],
      "nunito-sans": ["Nunito Sans", "sans-serif"],
      exo: ["Exo 2", "sans-serif"],
    },
    fontWeight: {
      "roboto-normal": 400,
      "roboto-bold": 700,
      "exo-regular": 400,
      "exo-medium": 500,
      "exo-semibold": 600,
      "exo-bold": 700,
    },
    fontStyle: {
      "roboto-italic": "italic",
    },
  },
  plugins: [],
};
