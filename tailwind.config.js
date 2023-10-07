/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-dark-blue': '#0d192b',
        'card-dark-blue': '#14253d',
        'line-dark-blue': '#2f415b',
        'primary-soft': '#8bacda',
        'primary-cyan': '#00fff7'
      }
    }
  },
  plugins: []
}
