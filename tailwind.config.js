/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        misans: ["misans"]
      },
      screens: {
        sm: '370px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  theme: {
    container: {
      center: true,
      width: {
        DEFAULT: '1234px',
        sm: '370px',
        lg: '1234px',
        xl: '1456px',
      }
    },
  },
  plugins: [],
};
