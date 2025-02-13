import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Ensures Vite uses src/ as the root directory
  build: {
    outDir: '../dist', // Places built files inside dist/
    rollupOptions: {
      input: {
        main: 'src/index.html',
        profile: 'src/profile.html',
        feed: 'src/feed.html'
      }
    }
  }
});
