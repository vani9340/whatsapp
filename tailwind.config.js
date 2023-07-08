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
        'light_black':'#1B1B1B',
        'yellow':'#FFE96E',
        'pink':'#FDF3EA',
        'green':'#E0F8F2',
        'blue':'#EEECFF',
        'light_blue':'#D9F2F7',
        'light_pink':'#FAEDED',
        'skin':'#F1F1F1',
        'bg_grn':'#40826A'
      },
   
    },
   
  },
  plugins: [],
}
