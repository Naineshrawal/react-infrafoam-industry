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
      'Poppins': 'Poppins'
    },
    
  },
  plugins: [],
}

