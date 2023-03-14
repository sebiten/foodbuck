/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      brownDark: "#734F13",
      beige: "#E5D5B5",
      red: "#E63946",
      oliveGreen: "#556B2F",
      grayLight: "#D3D3D3",
      gold: "#FFD700",
    },
  },
};
