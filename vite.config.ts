import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // GitHub Pages project sites are served from a repository subdirectory.
    // Relative URLs keep the generated assets valid regardless of that name.
    base: './',

    plugins: [react(), tailwindcss()],

    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },

    server: {
      hmr: true,
      watch: {},
    },
  };
});
