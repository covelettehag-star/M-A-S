import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep charcoal / black backgrounds (from logo's dark wordmark mood)
        ink: {
          950: "#070708",
          900: "#0B0B0D",
          800: "#121216",
          700: "#1A1A20",
          600: "#23232B",
        },
        // Soft cream / warm white text
        cream: {
          50: "#FBF8F2",
          100: "#F5EFE4",
          200: "#E9E0D1",
          300: "#D8CCB8",
        },
        // Champagne gold -> bronze accents (sampled from the logo "M")
        champagne: {
          50: "#F7ECD9",
          100: "#EFD9B8",
          200: "#E4C9A0",
          300: "#D8B98A",
          400: "#CBA776",
          500: "#BC9460",
          600: "#A87E4F",
          700: "#8A6740",
          800: "#6B5032",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(216, 185, 138, 0.35)",
        "glow-sm": "0 0 30px -10px rgba(216, 185, 138, 0.3)",
        card: "0 20px 50px -20px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #F7ECD9 0%, #E4C9A0 35%, #CBA776 65%, #A87E4F 100%)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(216,185,138,0.22) 0%, rgba(216,185,138,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        flow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        flow: "flow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
