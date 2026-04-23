/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B2B",
          light: "#1A2D3D",
        },
        bg: "#F8F4F0",
        accent: "#E8DCC4",
        "text-muted": "#555555",
      },
      fontFamily: {
        sans: ['"League Spartan"', "sans-serif"],
        heading: ['"League Spartan"', "sans-serif"],
        body: ['"League Spartan"', "sans-serif"],
        accent: ['"League Spartan"', "sans-serif"],
      },
      spacing: {
        section: "8rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
      },
      animation: {
        "zoom-out": "zoom-out 20s infinite alternate",
      },
      keyframes: {
        "zoom-out": {
          from: { transform: "scale(1.15)" },
          to: { transform: "scale(1.0)" },
        },
      },
    },
  },
  plugins: [],
};
