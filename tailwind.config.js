/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header-shadow' : '0, 2px, 10px rgba(0,0,0, 0.05)'
      },
      dropShadow:{
        'footer-shadow' : '-5px 30px 10px rgba(106, 106, 106, 0.44) '
      }
    },
    fontFamily:{
      'Poppins': 'Poppins',
      'Aclonica': 'Aclonica',
      'Saira' : 'Saira Stencil One',
      'RobotoCondensed' : 'Roboto Condensed'
    },
    textColor:{
      "base-red" : "#F43336"
    },
    screens: {
        'media400': '400px',
        'media700' : '700px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
      keyframes:  {
          progress: {
            '0%' : { transform : 'translatex(-100%)' },
            '100%' : { transform : 'translatex(0)' },
            
          }
      },
      animation: {
        progress : 'progress 2s ease-in-out'
      }
    
  },
  plugins: [],
}

