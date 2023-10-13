/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "712px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px"
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        amulya: ["var(--amulya-font)", , "ui-serif", "Georgia"]
      },
      fontSize: {
        body: [
          "1rem",
          {
            lineHeight: "1.5rem"
          }
        ]
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          50: "#E6E6E6",
          100: "#010101",
          200: "#A9A7A7"
        },
        white: {
          DEFAULT: "#FFFFFF",
          50: "#EFF2F7"
        },
        primary: {
          DEFAULT: "#6E00FF",
          50: "#C7C7C7",
          100: "#E7DEFA",
          200: "#EEE8FA",
          300: "#7811FF"
        },
        yellow: {
          DEFAULT: "#FFCB2B"
        }
      }
    }
  },
  plugins: []
};
