import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Lee nota desde variable de entorno
const NOTE = process.env.NOTE || 'ENECEB1';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, `dist/${NOTE.toLowerCase()}`),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, `src/notes/${NOTE}/index.html`),
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js'
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@notes': path.resolve(__dirname, 'src/notes')
    }
  }
});