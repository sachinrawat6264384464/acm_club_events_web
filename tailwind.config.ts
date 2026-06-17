import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acm: {
          royal: "#0066B3",
          sky: "#1C75BC",
          light: "#5D8AD2",
          pale: "#89AEE9",
          dark: "#0F172A", // slate-900 for dark layouts
          accent: "#38BDF8", // sky-400
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "sans-serif"],
      },
      animation: {
        'logo-spin': 'logo-spin 10s linear infinite',
      },
      keyframes: {
        'logo-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
