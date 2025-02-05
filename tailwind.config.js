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
        ttbbold: ["ttb-Bold", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
        promptBold: ["Prompt-Bold", "sans-serif"],
        promptSemiBold: ["Prompt-SemiBold", "sans-serif"],
        promptMedium: ["Prompt-Medium", "sans-serif"],
        promptLight: ["Prompt-Light", "sans-serif"],
        promptExtraLight: ["Prompt-ExtraLight", "sans-serif"],
        promptThin: ["Prompt-Thin", "sans-serif"],
        promptExtraBold: ["Prompt-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
}