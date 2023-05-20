/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/elements/**/*.{js,jsx,ts,tsx}`,
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      listStyleType: {
        "lower-alpha": "lower-alpha",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
