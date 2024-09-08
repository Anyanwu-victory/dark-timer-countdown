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
        'hills' : "url('/images/pattern-hills.svg')"
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
        digitFront: '#bbb',
        digitBack: '#ccc',
        digitBackground: '#f5f5f5',

      },

      boxShadow: {
        digit: '0 0 2px 1px rgba(0, 0, 0, 0.1)',
      },

      borderRadius: {
        digit: '4px',
      },

      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-180deg)' },
        },
        unflip: {
          '0%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        flip: 'flip 0.6s ease-in-out',
        unflip: 'unflip 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
