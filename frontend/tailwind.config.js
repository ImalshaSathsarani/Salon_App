/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors:{
        primary: "#FAF6E9",
        secondary:"#DFD0B8",
        accent:"#000000"
      }
    },
  },
  plugins: [],
}