/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        ttb: ["ttb-Regular", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        ttbbold: ["ttb-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}