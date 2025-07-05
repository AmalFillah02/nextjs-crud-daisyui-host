import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // @ts-ignore → abaikan kalau ada error TS
  daisyui: {
    themes: ["cyberpunk"],
  },
};

export default config;