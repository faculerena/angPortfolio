/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts}', './projects/**/*.{html,js,ts}',  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E0603E',
        'primary-shadow': '#CA4421',
        'secondary': '#367CF8',
        'background': '#121212',
        'surface': '#1E1E1E',

        'light-primary': '#01329c',
        'light-primary-shadow': '#001c58',
        'light-secondary': '#533483',
        'light-background': '#ffffff',
        'light-surface': '#bababa',
      },
      fontFamily: {
        'mono': ['roboto mono', 'monospace'],
      }
      
    },
  },
  plugins: [ 
],
}