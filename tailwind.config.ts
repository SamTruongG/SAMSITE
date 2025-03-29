import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode using the 'class' strategy
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths for your JSX/TSX files
    "./public/index.html", // Include HTML files for purging
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite", // Apply gradient animation
      },
      colors: {
        customBlue: "#1DA1F2", // Example custom colors
        customGreen: "#00FF00",
      },
    },
  },
  plugins: [],
};

export default config;
