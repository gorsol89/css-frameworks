module.exports = {
  mode: 'jit', // Ensure JIT mode is enabled
  content: [
    "./**/*.{html,js,ts}", 
    "!./node_modules/**/*"
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
