import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1230D6",
          "blue-deep": "#0A1A8F",
          navy: "#0B1660",
          lime: "#E2FF3D",
          pink: "#E7286B",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 26s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
