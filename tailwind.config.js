/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
   
      fontSize: {
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.9rem',
        '3xl': '2.4rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
    screens: {
      'sm': '360px',
      // => @media (min-width: 360px) { ... }

      'md': '540px',
      // => @media (min-width: 540px) { ... }

      'lg': '720px',
      // => @media (min-width: 720px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }

      '4xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      body: ["Quicksand"],
      alter:["Nunito"]
    },
  },
  plugins: [],

};
