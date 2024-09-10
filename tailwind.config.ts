import type { Config } from "tailwindcss";

const config: Config = {
  //localiza os arquivos que possam utilizar classes tailwind
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
