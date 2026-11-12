import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lavender: {
          50: "#FAF7FF",
          100: "#F4EFFE",
          200: "#E6DCFB",
          300: "#D3C2F8",
          400: "#B69CFF", // Primary lavender accent (dark)
          500: "#9675E8", // Secondary lavender
          600: "#7C55E7", // Primary lavender (light)
          700: "#653DD1",
          800: "#4F2CB3",
          900: "#3A1E8A",
          950: "#210D59",
        },
        themeDark: {
          bg: "#100D18",
          surface: "#171323",
          card: "#1E1930",
          border: "#342B49",
          text: "#F4F0FC",
          muted: "#B9B0CC",
        },
        themeLight: {
          bg: "#FCFAFF",
          surface: "#F4EFFE",
          card: "#FFFFFF",
          border: "#E2D9F3",
          text: "#1C152B",
          muted: "#6C5F82",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
