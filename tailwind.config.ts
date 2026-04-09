import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        surfaceElevated: "var(--surface-elevated)",
        border: "var(--border)",
        accent: "var(--accent)",
        accentSecondary: "var(--accent-secondary)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textMuted: "var(--text-muted)"
      },
      maxWidth: {
        "content": "1100px"
      }
    }
  },
  plugins: []
};

export default config;
