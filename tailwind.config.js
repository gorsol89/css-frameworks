module.exports = {
  mode: 'jit', // Ensures Just-In-Time mode is active
  content: [
    "./**/*.{html,js}", 
    "!./node_modules/**/*"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-gray-100', 'text-white', 'text-gray-500', 'text-gray-900',
    'bg-gray-900', 'bg-blue-500', 'hover:bg-blue-600',
    'hover:text-gray-400', 'font-bold', 'text-xl'
  ],
  plugins: [],
};
