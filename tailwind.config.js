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
        primary: "#FFFFFF", // Dark theme color
        darkBg: "#121212", // Light theme color black
        accent: "#366FA3", // Accent color sky blue 2
        accent2: "#080F1A", // Accent color sky blue 2
        accent3: "#092143CC", // Accent color sky blue 2
        button: "#548FD2", // Button color sky blue
      },
      borderRadius: {
        'extra': '50px',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        page: "#100E1C",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    import("flyonui"),
    import("flyonui/plugin"),
  ],
}