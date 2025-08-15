import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: `dist/notes/${process.env.NOTE_NAME?.trim()}`,
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, `src/notes/${process.env.NOTE_NAME?.trim()}/main.js`),
      output: {
        entryFileNames: `assets/js/[name].[hash].js`,
        chunkFileNames: `assets/js/[name].[hash].js`,
        assetFileNames: `assets/[ext]/[name].[hash][extname]`
      }
    }
  }
})