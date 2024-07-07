/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'sans': 'Barlow semi condensed',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
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
  },
  plugins: [],
}

