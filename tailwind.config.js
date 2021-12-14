module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 400px) { ... }

      md: "700px",
      // => @media (min-width: 700px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    minHeight: {
      full: "500px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
