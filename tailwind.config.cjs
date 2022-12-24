/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-dark': '#1D1D1D',
        'secondary-dark': '#232526',
        'dark-tertiary': '#30363A',
        'dark-pattern': '#000000',
        'primary-title': '#F4F4F4',
        'secondary-title': '#B8B8B8',
        'sub-title': 'rgba(184, 184, 184, 0.7)',
        'primary': '#99A9FF',
        'secondary': '#5CE4CF',
        'shape': '#232526',
        'wireframe': '#7E868C',
        'angular-gradient': 'conic-gradient(from 180deg at 50% 50%, #66FFE6 -160.13deg, #8093FF 42.37deg, #66FFE6 199.87deg, #8093FF 402.37deg)',
        'linear-gradient': 'linear-gradient(90deg, rgba(128, 147, 255, 0) 0%, #7D9BFA 21.14%, #60DBD4 78.8%, rgba(92, 228, 207, 0) 100%)',
        'linear-full': 'linear-gradient(90deg, #7D9BFA 0%, #60DBD4 99.81%)',
      },
      boxShadow: {
        'hover': '0px 0px 90px 20px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
