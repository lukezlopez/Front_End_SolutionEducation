/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f1115",
        surface: "#1a1c20",
        accent: "#6366f1",
        accentHover: "#4f46e5",
        textPrimary: "#f9fafb",
        textSecondary: "#9ca3af",
        borderColor: "#27272a",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.3)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};