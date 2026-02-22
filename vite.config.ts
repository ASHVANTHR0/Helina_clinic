import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Helina_clinic/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        // add more entry points here if necessary
      }
    }
  }
});
