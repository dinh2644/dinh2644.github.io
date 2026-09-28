import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2EEE6",
        mat: "#F8F6F1",
        ink: "#1B1A18",
        "ink-soft": "#3A3732",
        muted: "#6A645A",
        rule: "#DDD6C9",
        "rule-soft": "#E6E0D5",
        "rule-strong": "#CFC7B8",
        accent: "#A8321F",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
