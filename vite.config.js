// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        feed: 'feed.html',
        login: 'login.html',
        profile: 'profile.html',
        register: 'register.html',
      },
    },
  },
});
