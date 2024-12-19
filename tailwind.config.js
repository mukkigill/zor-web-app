/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tertiary': '#707070',
        'blue': '#114182',
        'yellow': '#EDB601',
        'purple': '#73177b',
        'orange': '#ff7734',
        'off-white': '#C9EEEE',
      },
      fontFamily: {
        'nimbus-sans': ['nimbus-sans'],
      },
    },
  },
  plugins: [],
};
