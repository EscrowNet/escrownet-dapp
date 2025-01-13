import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      purple: "#64537B",
      midnight: "#2D0561",
      gray: {
        light: "#F8F8F8",
        medium: "#C4C4C4",
        dark: "#4A4747",
      },
      orange: "#FBA197",
    },
  },
  plugins: [],
} satisfies Config;
