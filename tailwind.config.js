/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1200px",
        sm: "370px",
        md: "740px",
        lg: "1200px",
        xl: "1400px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "0.5rem",
        md: "2rem",
        lg: "3rem"
      },
    },
    transitionDuration: {
      DEFAULT: "300ms",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        "dark": "#4d4d4d",
        "light": "#aaaaaa"
      },
      smoke: {
        "base": "#737373",
      },
      accent: {
        "dark": "#121212",
        "white": "#ededed",
        "300": "#333333",
        "500": "#555555",
        "900": "#999999",
        "aaa": "#aaaaaa",
        "ccc": "#cccccc"
      },
      orange: {
        "base": "#c2410c"
      },
      purple: {
        "base": "#7e22c7",
      },
      pink: {
        "base": "#f472b6"
      }
    },
    extend: {
      fontFamily: {
        "petrona": ["petrona"],
        "playwrite-gbs": ["playwritegbs"],
        "instrument-sans": ["instrumentSans"]
      },
      screens: {
        DEFAULT: "1200px",
        sm: "370px",
        md: "740px",
        lg: "1200px",
        xl: "1400px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
