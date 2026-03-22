/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- THIS LINE IS CRITICAL
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          darkGreen: '#1A3626',
          lightGreen: '#2D5A40',
          earth: '#4A3B2C',
          gold: '#D4AF37',
          sand: '#F4F1EA'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}