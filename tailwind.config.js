/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-albert-sans)", "system-ui", "sans-serif"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"], // custom
      },
    },
  },
  safelist: [
    'bg-gradient-to-r',
    'from-[rgb(105,189,242)]',
    'via-[rgb(212,128,242)]',
    'to-[rgb(255,191,128)]',
  ],
  plugins: [],
};
