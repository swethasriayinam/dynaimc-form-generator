// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js', // Ensure PostCSS is properly configured
  },
});
