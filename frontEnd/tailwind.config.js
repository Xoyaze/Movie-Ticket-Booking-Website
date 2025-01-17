/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          'dark': "rgb(0,0,6)",
        }
      },
      fontFamily: {
        'playwrite': "Playwrite DE Grund, sans-serif",
      },
    },
  },
  plugins: [],
}