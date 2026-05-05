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
        tactical: {
          black: "#0a0a0a",
          dark: "#111111",
          gray: "#1a1a1a",
          light: "#2a2a2a",
          electric: "#00d4ff",
          neon: "#39ff14",
          muted: "#888888",
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00d4ff, 0 0 10px #00d4ff" },
          "100%": { boxShadow: "0 0 20px #00d4ff, 0 0 30px #00d4ff" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
