/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#590000',
        primary2: "#E65E5E",
        secondary: '#F6F6DA',
        bg: '#FFFFFF'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        page: "#100E1C",
      }),
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        instruemntserif: ['InstruemntSerif', 'sans-serif'],
      },
    },
  },
  plugins: [
    import("flyonui"),
    import("flyonui/plugin"),
  ],
}