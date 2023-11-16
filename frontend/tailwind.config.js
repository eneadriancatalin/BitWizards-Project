/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./public/**/*.html",
    "./public/**/*.jsx",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateY(-100%)",
            animationDelay: "0.5s",
          },
          "25%": { transform: "translateY(0%)", animationDelay: "0.9s" },
          "50%": { transform: "translateY(100%)", animationDelay: "0.9s" },
          "75%": { transform: "translateY(0%)", animationDelay: "0.9s" },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
      },
      screens: {
        "2xl": { min: "1536px" },
        "1.5xl": { min: "1281px", max: "1290px" },
      },
      colors: {
        customRed: "#BD1547",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
