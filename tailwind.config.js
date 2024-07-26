/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          base: '#6d31ed',
          light: '#2C2C2C',
          dark: '#0C0C0C',
        },
        secondary: {
          base: '#15abff',
          light: '#F5F5F5',
          dark: '#D5D5D5',
        },
        warning: '#FF0000',
        success: '#00FF00',
        danger: '#FF0000',
        info: '#0000FF',
        Gray: '#A9A9A9',
        Grey: '#808080',
        Black: '#000000',
        White: '#FFFFFF',
      }
    },
  },
  plugins: [],
};
