// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/js/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink':    '#F8C1CC',
        'pastel-yellow':  '#FFF1A8',
        'mint-whisper':   '#C0E8D5',
        'soft-mocha':     '#A67B5B',
        'cream-cloud':    '#FFF8E7',
      }
    }
  },
  plugins: [],
}
