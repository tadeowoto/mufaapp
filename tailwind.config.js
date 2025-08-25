/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          greenBg: "#124E2B",
          greenSecondaryBg: "#1B5E20",
          greenLight: "#2E7D32",
          yellowDetail: "#FFD600",
          whiteCardBg: "#FFFFFF",
          grayLight: "#E0E0E0",
          grayDark: "#9E9E9E",
          black: "#212121",
        },
      },
    },
  },
  plugins: [],
};
