import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F5EC",
          50: "#FCFBF6",
          100: "#F7F5EC",
          200: "#EFEBDB",
        },
        ink: {
          DEFAULT: "#142826",
          soft: "#3A4A47",
          muted: "#6B7A77",
        },
        teal: {
          50: "#F0F7F7",
          100: "#D8EAEB",
          200: "#B2D6D8",
          300: "#82BABD",
          400: "#4F989D",
          500: "#2F7C82",
          600: "#1F636A",
          700: "#1C5158",
          800: "#1A4248",
          900: "#16373C",
          950: "#0B2125",
        },
        gold: {
          DEFAULT: "#D99B4E",
          50: "#FBF4E9",
          100: "#F5E5CB",
          200: "#EDCE9C",
          300: "#E4B673",
          400: "#D99B4E",
          500: "#C9852F",
          600: "#A66B23",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,40,38,0.04), 0 8px 24px -12px rgba(20,40,38,0.12)",
        lift: "0 4px 12px -4px rgba(20,40,38,0.10), 0 24px 48px -24px rgba(20,40,38,0.20)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
