/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/hero2.jpg')",
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      gridTemplateColumns: {
        custom: 'minmax(150px, 18%) 1fr',
      },
      letterSpacing: {
        widest: '.5em',
      },
      colors: {
        green: '#90ba04',
      },
    },
  },
  plugins: [],
};
