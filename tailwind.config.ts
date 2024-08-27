import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#C73B0F",
      green: "#1EA575",
      rose: {
        50: "#FCF8F6",
        100: "#F5EEEC",
        300: "#CAAFA7",
        400: "#AD8A85",
        500: "#87635A",
        900: "#260F08",
      },
    },
    fontSize: {
      sm: ["0.875rem", "0.875rem"],
      base: ["1rem", "1rem"],
      xl: ["1.5rem", "1.5rem"],
      "2xl": ["2.5rem", "3rem"],
    },
    extend: {
      fontFamily: {
        "red-hat-text": ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
