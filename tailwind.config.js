/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        primary: ["Arial", "sans-serif"],
        header: ["Rammetto One", "sans-serif"],
      },
      colors: {
        header: "#4c1130",
        footer: "#180808",
      },
      width: {
        logo: "3rem",
      },
      padding: {
        fif: "50px",
      },
    },
  },
  plugins: [],
};
