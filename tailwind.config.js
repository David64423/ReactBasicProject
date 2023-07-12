/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minWidth: {
      '1/2': '50%',
      'mw-as':'70px',
    },
  },
  plugins: [],
}

