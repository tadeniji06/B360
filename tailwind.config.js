/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bold-blue": "#000647",
        "light-blue": "#daeefe",
        "primary-yellow": "#FFC60C",
      },
    },
  },
  plugins: [],
};
