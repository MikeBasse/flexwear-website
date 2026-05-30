import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Institutional master palette (drawn from the FlexWear logo)
        ink: {
          DEFAULT: "#16181D", // institutional black
          soft: "#23262E",
          mute: "#3A3A3A",
        },
        bone: {
          DEFAULT: "#F6F3EC", // warm off-white / cream
          deep: "#EBE6DA",
        },
        gold: {
          DEFAULT: "#C9A227", // prestige gold
          bright: "#E0A82E",
          soft: "#F2C94C",
        },
        blood: {
          DEFAULT: "#C8102E", // PNG heritage red
          deep: "#9E0C24",
        },
        paradise: {
          // Bird-of-paradise plumage accents
          flame: "#E2541F",
          amber: "#F0A019",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.22em",
      },
      maxWidth: {
        shell: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,24,29,0.04), 0 12px 32px -12px rgba(22,24,29,0.18)",
        lift: "0 24px 60px -20px rgba(22,24,29,0.45)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-pan": {
          "0%": { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.08) translateY(-2%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.9s ease both",
        "slow-pan": "slow-pan 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
