/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        12: '0.1rem',
      },
      backgroundImage: {
        'hero-pattern': "url('./images/hero2.jpg')",
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      gridTemplateColumns: {
        custom: 'minmax(250px, 18%) 1fr',
      },
      letterSpacing: {
        wider: '0.15em',
        widest: '.5em',
      },
      colors: {
        green: '#90ba04',
      },
    },
  },
  plugins: [],
};
