import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        "paper-dim": "#F1F0E9",
        ink: "#15181C",
        "ink-soft": "#565C63",
        "ink-faint": "#8A8F94",
        line: "#DCDACF",
        "line-strong": "#C4C1B3",
        signal: "#2451E0",
        "signal-dim": "#E8ECFC",
        "signal-ink": "#12308F",
        amber: "#B9722B",
        "amber-dim": "#F5E9DA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
