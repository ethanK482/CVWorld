/** @type {import(' css').Config} */
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
      backgroundImage: {
        'custom-gradient-blue-pink': 'linear-gradient(171deg, rgba(181,99,99,1) 28%, rgba(77,163,232,1) 83%)',
        'custom-gradient-ocean': 'linear-gradient(to left, #191654, #43C6AC)',
        'custom-gradient-deep': 'linear-gradient(to left, #434343, #000000)',
        'custom-gradient-blue-green': 'linear-gradient(to right, #267871, #136a8a)',
        'custom-gradient-orange-red': 'linear-gradient(to right, #f5af19, #f12711)',
      },
    },
  },
  plugins: [],
}




