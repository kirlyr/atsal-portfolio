/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    }, 
    extend: {
      colors: {
        backg1 : '#F8F7F3', //white baby powder
        backg2 : '#292929', //raisin black
        txt1 : '#FFFFFF', // for any big text
        txt2 : '#FAFAF7', //for h1,h2,etc
        txt3 : '#4F433B', // for paragraph
        button1 : '#F5F4F0', 
        button2 : '#D9D8D4',
        button3 : '#CBCAC7'
      },
      screens: {
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

