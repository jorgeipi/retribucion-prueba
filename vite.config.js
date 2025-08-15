import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('note-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Añade alias específicos si es necesario
      '@/components': path.resolve(__dirname, './src/components')
    }
  },
  build: {
    outDir: `dist/notes/${process.env.NOTE_NAME?.trim()}`,
    lib: {
      entry: path.resolve(__dirname, `src/notes/${process.env.NOTE_NAME?.trim()}/main.js`),
      formats: ['es'],
      name: 'NoteComponent',
      fileName: 'note-component'
    },
    rollupOptions: {
      // Añade aquí las dependencias que no deben empaquetarse
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})