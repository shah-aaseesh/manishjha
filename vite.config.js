import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        biography: resolve(__dirname, 'biography.html'),
        missionVision: resolve(__dirname, 'mission-vision.html'),
        articles: resolve(__dirname, 'articles.html'),
        opinions: resolve(__dirname, 'opinions.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
