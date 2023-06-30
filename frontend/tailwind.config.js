/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: { primary: { "light": "#3ad8f7", "": "#8aecff", "dark": "#d8f9ff" } },
  },
  plugins: [],
}

