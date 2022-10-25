const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "colors": {
        "noir": "#1e1c1c",
        "noir2": "#282424",
        "brun": "#958575",
        "gris": "#eaeaea",
        "blanc": "#fafafa",
        "brun2": "#cbb7a4"
      },
      "fontSize": {
        "base": "1rem",
        "lg": "2.3125rem",
        "xl": "3.3125rem",
        "2xl": "5.3125rem",
        "3xl": "7.6875rem"
      },
      "fontFamily": {
        "darker-grotesque": "Darker Grotesque",
        "cantarell": "Cantarell"
      },
      "borderRadius": {
        "none": "0",
        "xs": "2rem",
        "sm": "2.5rem",
        "default": "3.125rem"
      }


    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
