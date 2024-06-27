/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'sans': 'Barlow semi condensed',
    },
    extend: {
      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(0, 0%, 81%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
        '50%-white': 'hsl(0, 0%, 50%)',
        '70%-white': 'hsl(0, 0%, 70%)',
      }
    },
    screens: {
      '3-xl': '1600px',
    },
  },
  plugins: [],
}

