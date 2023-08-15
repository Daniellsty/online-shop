/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar': 'rgba(212, 228, 228, 0.523)',
         'primary':'#374151',
         'bg-image':'rgba(0, 0, 0, 0.37)'
      },
      backgroundImage:{
       
          'shop-nav': "url('./src/assets/images/pexels-magda-ehlers-2861656.jpg')",
        
      }
    },
  },
  plugins: [],
}

