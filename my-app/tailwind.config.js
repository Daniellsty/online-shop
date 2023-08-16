/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         'navbar': 'rgba(255, 255, 255, 0.25)',
         'navbar-shadow':'0 4px 30px rgba(0, 0, 0, 0.1)',
         'navbar-filter':'blur(5px)',
         'webkit-filter':'blur(5px)',
         'primary':'#374151',
         'bg-image':'rgba(0, 0, 0, 0.57)',

      },
      backgroundImage:{
       
          'shop-nav': "url('./src/assets/images/pexels-magda-ehlers-2861656.jpg')",
        
      }
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}

