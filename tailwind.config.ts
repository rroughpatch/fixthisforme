import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "dark-accent": "var(--dark-accent)",
        "light-accent": "var(--light-accent)",
      },
      spacing: {},
      backgroundImage: {
        "row-gradient-unhover":
          "radial-gradient(circle, rgba(34,53,80,1) 0%, rgba(29,45,68,1) 100%)",
      },
      borderWidth: {
        "4": "4px",
        "8": "8px",
        "10": "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
