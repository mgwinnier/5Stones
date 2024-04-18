// tailwind.config.ts
import { Config } from 'tailwindcss';
import { addVariablesForColors } from './addVariablesForColorsPlugin';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // Define your animation name and the parameters
        scroll: "scroll 40s linear infinite forwards"
      },
      keyframes: {
        scroll: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' }
        }
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
