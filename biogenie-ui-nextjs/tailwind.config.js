module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        biogreen: "#10b981",
        biotechblue: "#1e3a8a",
        prolight: "#f4f5f7",
        prodark: "#1c1e22"
      }
    },
  },
  plugins: [],
};
