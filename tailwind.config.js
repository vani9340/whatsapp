/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'DmSans': 'DM Sans, sans-serif'
      },
      colors:{
        'bg': '#F6F9FF',
        'grn':'#0B996F',
        'light_grn':'#D7FEC8',
        'grey':'#686868',
        'light_black':'#1B1B1B'
      },
    },
   
  },
  plugins: [],
}
