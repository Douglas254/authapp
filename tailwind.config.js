/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mandali: ["Mandali", "sans-serif"],
      alumni: ["Alumni Sans Collegiate One", "sans-serif"],
      nosifer: ["Nosifer", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#B08642",
      },
    },
  },
  plugins: [],
};
