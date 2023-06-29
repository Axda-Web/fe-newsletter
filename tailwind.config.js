/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#242742",
        "pale-navy": "#36384D",
        vermellion: "#FF6155",
      },
      gradientColorStops: {
        "primary-gradient": "linear-gradient(#FF6A3A, #FF527B)",
      },
      fontSize: {
        heading: "3.5rem",
        body: "1rem",
        "body-small": "0.75rem",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontFace: {
        roboto: [
          {
            "font-family": "Roboto",
            src: "url('./public/assets/fonts/Roboto-Regular.ttf') format('ttf')",
            "font-weight": "400",
          },
          {
            "font-family": "Roboto",
            src: "url('./public/assets/fonts/Roboto-Regular.ttf') format('ttf')",
            "font-weight": "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
