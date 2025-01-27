/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5E196C",
        secondary: "#1A202F",
        white: "#FFFFFF",
        gray: "#232B3E",
        aqua: "#24B7E5",
        navygray: "#BECFFA",
        navyblue: "#102437",
      },
      backgroundImage: {
        mygradient1:
          "linear-gradient(to bottom, rgba(5, 5, 5, 0.85) 0%, rgba(30, 30, 30, 0.55) 64%)",
      },
      boxShadow: {
        right: "4px 0 10px rgba(0, 0, 0, 0.1)",
        bottom: "0 4px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
