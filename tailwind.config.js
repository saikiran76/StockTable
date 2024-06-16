/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppin": ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(285, 53%, 94%, 1) 54%)',
      },
    },
  },
  plugins: [],
}