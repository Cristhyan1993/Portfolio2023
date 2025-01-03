/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'changa': ['Changa', 'sans-serif']
      },
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primaryLight)",
        primaryDark: "var(--primaryDark)",
        secondary: "var(--secondary)",
        secondaryLight: "var(--secondaryLight)",
        secondaryDark: "var(--secondaryDark)"
      }
    //   animation:{
    //   slideL: "slideL 500ms linear",
    //   slideR: "slideR 500ms linear"
    // },
    // keyframes: {
    //   slideL: {
    //     '0%': {transform: 'translateX(-100%'},
    //     '100%' : {transform: 'translateX(0)'}
    //   },
    //   slideR: {
    //     '0%': {transform: 'translateX(100%'},
    //     '100%' : {transform: 'translateX(0)'}
    // }}
  },
  },
  plugins: [],
}
