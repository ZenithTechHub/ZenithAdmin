import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#000112",
        "dark-grey": "#2B2C37",
        "light-grey-light-bg)": "#F4F7FD",
        "lines-dark": "#3E3F4E",
        "lines-light": "#E4EBFA",
        "main-purple": "#635FC7",
        "main-purple-hover": "#A8A4FF",
        "medium-grey": "#828FA3",
        red: "#EA5555",
        "red-hover": "#FF9898",
        "very-dark-grey-dark-bg": "#20212C",
        white: "#FFFFFF",
      },
      fontFamily: {
        "plus-jakarta-sans": "var(--font-plus-jakarta-sans)",
      },
    },
    screens: {
      sm: "0px",
      smB: "641.25px",
      md: "907.5px",
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};

export default config;
