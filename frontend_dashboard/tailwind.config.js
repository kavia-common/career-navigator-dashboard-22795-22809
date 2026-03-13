/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Tuned to match ui1/ui2 references (light canvas, subtle borders, blue accent)
        primary: "#2563EB",
        primaryStrong: "#1D4ED8",
        primarySoft: "#EEF2FF",

        success: "#22C55E",

        background: "#F6F7FB",
        surface: "#FFFFFF",

        text: "#111827",
        muted: "#6B7280",
        subtle: "#4B5563",
        border: "#E5E7EB",
        borderSoft: "#EEF2F7",

        danger: "#EF4444"
      },
      boxShadow: {
        // Subtle card shadow like the reference
        soft: "0 1px 2px rgba(16, 24, 40, 0.06)"
      }
    }
  },
  plugins: []
};
