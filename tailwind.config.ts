import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "hsl(0, 0%, 2%)",
      background: "hsl(39, 71%, 95%)",
      primary: "hsl(358, 100%, 32%)",
      secondary: "hsl(0, 79%, 87%)",
      accent: "hsl(0, 78%, 47%)",
    },
  },
  plugins: [],
};

export default config;
