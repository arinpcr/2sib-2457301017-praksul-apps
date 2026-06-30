/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bubblegum: "#FF8FB1",
        candy: "#FFC2D9",
        sunny: "#FFD966",
        sky: "#A8D8E8",
        cream: "#FFF3E2",
        cocoa: "#7A3B3B",
      },
      boxShadow: {
        cute: "4px 4px 0px 0px rgba(122,59,59,0.15)",
        "cute-lg": "6px 6px 0px 0px rgba(122,59,59,0.18)",
      },
    },
  },
  plugins: [],
}
