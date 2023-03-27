/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg':'992px',
      'xl' : '1200px',
      '2xl' : '1400px'
    },
    extend: {
      colors:{
        gradStart : '#ec4899',
        gradEnd : '#eab308',
        warning : '#10b981',
        warningLight : '#34d399',
        secondary : '#6d28d9',
        secondaryLight : '#7c3aed',
        brand : '#ec4899',
        brandLight : '#f472b6'
      }
    },
  },
  plugins: [],
}


