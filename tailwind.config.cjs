/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        "p-very-dark-magenta": " hsl(300, 43%, 22%)",
        "p-very-soft-pink": "hsl(333, 80%, 67%)",
        "n-dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "n-light-grayish-magenata": "hsl(300, 24%, 96%)",
        "n-white": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        body: "15px",
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
