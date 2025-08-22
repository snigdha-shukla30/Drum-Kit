import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Arvo", "serif"],
      },
      boxShadow: {
        pressed: "0 3px 4px 0 #DBEDF3",
      },
      textShadow: {
        DEFAULT: "3px 0 #DA0463",
      },
    },
  },
  plugins: [],
};
export default config;
