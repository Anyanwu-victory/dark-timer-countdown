import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'stars': "url('/images/bg-stars.svg')",
      },
      fontFamily: {
        'sans': ['Red Hat Text']
      },

      lineHeight: {
        'extra-loose': '6.5'
      },

      colors:{
        SoftRed: 'hsl(345, 95%, 68%)',
        DarkdesaturatedBlue: 'hsl(236, 21%, 26%)',
        VeryDarkBlue: 'hsl(235, 16%, 14%)',
        VeryDarkBlackBlue: 'hsl(234, 17%, 12%)',
        GreyishBlue: 'hsl(237, 18%, 59%)',
        White: 'hsl(0, 0%, 100%)',

      },
    },
  },
  plugins: [],
};
export default config;
