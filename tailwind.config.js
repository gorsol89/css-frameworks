module.exports = {
  mode: 'jit', // Just-In-Time mode for fast builds
  content: [
    "./src/**/*.{html,js}", // Scans all HTML and JS files inside src
    "./dist/**/*.{html,js}" // Ensures Tailwind doesn't remove styles
  ],
  safelist: [
    'bg-gray-100', 'text-white', 'text-gray-500', 'text-gray-900',
    'bg-gray-900', 'bg-blue-500', 'hover:bg-blue-600',
    'hover:text-gray-400', 'font-bold', 'text-xl'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
