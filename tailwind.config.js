/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#070B14",
        surface: "#0F172A",
        elevated: "#131D35",

        primary: "#7C3AED",
        violetGlow: "#A855F7",
        cyanAccent: "#22D3EE",

        textPrimary: "#F8FAFC",
        textSecondary: "#CBD5E1",
        textMuted: "#64748B",
      },

      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      maxWidth: {
        container: "1400px",
      },

      boxShadow: {
        glow: "0 0 30px rgba(124,58,237,0.25)",
      },

      backgroundImage: {
        heroGradient:
          "linear-gradient(to bottom right, #070B14, #0F172A, #1E1B4B)",
      },
    },
  },

  plugins: [],
}