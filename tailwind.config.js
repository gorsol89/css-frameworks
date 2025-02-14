// tailwind.config.js
module.exports = {
  content: [
    "./index.html",       // Ensures Tailwind scans your main HTML file
    "./src/**/*.{html,js}" // Scans all HTML and JS files in src
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
