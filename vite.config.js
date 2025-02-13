import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Tells Vite to look inside src/
  build: {
    outDir: '../dist', // Places built files into dist/
    rollupOptions: {
      input: {
        main: 'src/index.html', 
        profile: 'src/profile.html',
        feed: 'src/feed.html'
      }
    }
  }
});
