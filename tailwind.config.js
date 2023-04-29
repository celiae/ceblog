/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
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
        moving: {
          "0%": { width: "0" },
          "50%": { width: "50wh" },
          "100%": { width: "100wh" },
        },
      },
      animation: {
        blink: "blink .5s infinite",
        "waving-hand": "wave 2s linear infinite",
        "linear-moving": "moving 1s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
