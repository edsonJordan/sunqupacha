/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,    
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'tablet': '744px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      '4k':'1440px',
    },
    extend: {
      colors:{
        'primaryactive':'#038AC0',
        'primary':'#1FABE2',
        'primarylight':'#D2EEF9',
        'primaryblue':'#197CCD',
        'bluehard':'#0160AE',
        'hardgray':'#3B4149',
        'normalgray':'#616A76',
        'lightgray':'#FAFAFA',
        'bordergray':'#C8C8C8',
      },
      fontFamily:{
        roboto:['roboto']
      }
    },
  },
  plugins: [],
}
