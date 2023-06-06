/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "russo": ["var(--font-russo)"],
        "roboto": ["var(--font-roboto)"],
        "rota-bold": ["var(--font-rota-bold)"],
      },
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
      animation: {
        'fade-in-1': 'fadeInSlow 1s linear',
        'fade-in-2': 'fadeInSlow 2s linear',
        'fade-in-3': 'fadeIn 3s linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '66%': { opacity: 0 },
          '100': { opacity: 100 },
        },
        fadeInSlow: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100': { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
