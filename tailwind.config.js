/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#F638DC",
        gray: colors.gray,
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["Roboto", "Montserrat", "sans-serif", "Inter", "sans-serif"],
        serif: ["Suranna"],
      },
      backgroundImage: {
        site: "url('./assets/asia-bg6.jpg')",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
