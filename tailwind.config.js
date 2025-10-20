/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        t_primary: "#00A3CE",
        t_dark: "#1B3C40",
        t_bg: "#F3F6F8",
        t_accent: "#C2D106",
      },
    },
  },
  plugins: [],
}
