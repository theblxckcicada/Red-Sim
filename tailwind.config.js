/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        firacode: ["Fira Code", "monospace"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          from: {
            "text-shadow":
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #10B981, 0 0 20px #10B981",
          },
          to: {
            "text-shadow":
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #10B981, 0 0 40px #10B981",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
