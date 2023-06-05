/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem"
      },
      colors: {
        "dutch-white": "#E1DBB7",
        "brown-sugar": "#AA7051",
        "timberwolf": "#DBD4CC",
        "taupe-gray": "#8E8484",
        "paynes-gray": "#34444A",
      },
    },
  },
  plugins: [],
};
