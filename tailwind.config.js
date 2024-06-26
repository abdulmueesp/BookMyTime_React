/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mainTxt:['Cinzel'],
        loctxt:['Poppins'],
        locs:['LXGW'],
        local:['Montserrat']
      },
      boxShadow: {
        'inner-custom': 'inset 1px 1px 7px 0px rgba(0,0,0)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 5s ease-in-out forwards',// fadeIn is the name of the animation
        'speedfade' :'fadeIn 1s ease-in-out forwards' 
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          '&::-webkit-scrollbar': { /* WebKit */
            'width': '0',
            'height': '0',
          },
        },
      });
    }
  ],
}
