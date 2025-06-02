import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#2D0561",
        dark: {
          bg: "#0F0A1A", // Very dark purple-black
          surface: "#1A1025", // Slightly lighter surface
          card: "#241832", // Card backgrounds
          border: "#3D2B4F", // Borders and dividers
          text: {
            primary: "#E8E3F0", // Primary text (light purple-white)
            secondary: "#B8A8CC", // Secondary text (muted purple)
            muted: "#8B7A9E", // Muted text
          },
          purple: {
            light: "#8B6FBF", // Light purple for accents
            medium: "#6B4C9A", // Medium purple
            dark: "#4A2C7A", // Dark purple for hover states
          },
          accent: "#9D7BEA", // Bright purple accent
        },
      },
      backgroundImage: {
        "hero-bg": "url('/bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
