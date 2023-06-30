/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#242742",
        "light-navy": "#24274280",
        "pale-navy": "#36384D",
        vermellion: "#FF6155",
        "light-gray": "#19182B40",
      },
      gradientColorStops: {
        // TODO: Theme gradient doesn't seems to work.. Find where the problem is coming from.
        "primary-gradient": "linear-gradient(#FF6A3A, #FF527B)",
      },
      fontSize: {
        "heading-desktop": "3.5rem",
        "heading-mobile": "2.5rem",
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
