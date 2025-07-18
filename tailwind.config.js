// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#291E48", // Deep purple color
        secondary: "#F9FAFB", // Light gray color
        accent: "#FBAF3F", // Bright orange color
        white: "#FFFFFF", // Pure white color
      },
    },
  },
  plugins: [],
};
