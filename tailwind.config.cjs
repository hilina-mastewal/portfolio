/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      screens: {
        md: "1000px",
        xs: "700px",
        sm: "300px",
        sm1: "390px",
        xssm: "500px",
      },
      animation: {
        "waving-hand": "wave 1s linear infinite",
        "waving-hands": "wave 3s linear infinite",
      },
    },
  },
  plugins: [],
};
