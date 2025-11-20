/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f766e', // teal-700
        secondary: '#cbd5e1', // slate-300
        accent: '#0ea5e9', // sky-500
        background: '#f8fafc', // slate-50
        surface: '#ffffff',
      }
    },
  },
  plugins: [],
}