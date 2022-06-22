/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      colors: {
       red49: '#FE4A49',
       primaryBlack: '#414042',
       secondaryBlack: '#212121',
       gray4F: '#4f4f4f',
       pinkF6: '#FDF9F6',
       green4A : '#088F4A'
      },
    },
    screens: {
      res1: "1410px",
      res2: "1230px",
    },
  },
  plugins: [],
};