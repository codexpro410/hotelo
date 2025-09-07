/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Spline Sans', 'sans-serif']
      },
      colors: {
        primary: '#ad58eb',
        base: '#191919',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.15)'
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(90deg, #ad58eb 0%, #7a5be6 100%)'
      }
    },
  },
  plugins: [],
}

