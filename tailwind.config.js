/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 1px 0 #c3cdce',
        'custom-dark': '0 1px 0 #2e2f30',
      },
    },
  },
  plugins: [],
}




