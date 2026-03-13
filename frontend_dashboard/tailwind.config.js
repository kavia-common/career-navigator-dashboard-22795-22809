/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        success: "#06b6d4",
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#111827",
        muted: "#64748b",
        danger: "#EF4444"
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16, 24, 40, 0.06), 0 1px 3px rgba(16, 24, 40, 0.10)"
      }
    }
  },
  plugins: []
};
