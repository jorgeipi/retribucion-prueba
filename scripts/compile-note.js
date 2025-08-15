import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const noteName = process.argv[2]?.trim()

if (!noteName) {
  console.error('Uso: node scripts/compile-note.js <nombre-nota>')
  process.exit(1)
}

console.log(`Compilando nota ${noteName}...`)

try {
  // 1. Verificar y limpiar el nombre de la nota
  const cleanNoteName = noteName.replace(/\s+/g, '')
  if (cleanNoteName !== noteName) {
    console.warn(`Advertencia: Se eliminaron espacios del nombre de nota: "${noteName}" -> "${cleanNoteName}"`)
    noteName = cleanNoteName
  }

  // 2. Verificar estructura de la nota
  const notePath = path.join(__dirname, `../src/notes/${noteName}`)
  const mainJsPath = path.join(notePath, 'main.js')
  
  if (!fs.existsSync(notePath)) {
    throw new Error(`No existe la nota ${noteName} en src/notes/`)
  }
  if (!fs.existsSync(mainJsPath)) {
    throw new Error(`No existe main.js en ${notePath}`)
  }

  // 3. Verificar contenido de main.js
  const mainJsContent = fs.readFileSync(mainJsPath, 'utf-8')
  if (!mainJsContent.includes('createApp') || !mainJsContent.includes('mount')) {
    throw new Error('El archivo main.js no parece un punto de entrada Vue válido')
  }

  // 4. Compilar con Vite (Windows/Linux compatible)
  const command = process.platform === 'win32'
    ? `set NOTE_NAME=${noteName} && vite build`
    : `NOTE_NAME=${noteName} vite build`

  console.log(`Ejecutando: ${command}`)
  execSync(command, { stdio: 'inherit' })

  // 5. Verificar archivos generados
  const distPath = path.join(__dirname, `../dist/notes/${noteName}`)
  if (!fs.existsSync(distPath)) {
    throw new Error('No se generaron archivos en el directorio dist')
  }

  console.log(`✅ Nota compilada en: dist/notes/${noteName}`)
  console.log('Archivos generados:', fs.readdirSync(distPath).join(', '))

} catch (error) {
  console.error(`❌ Error compilando ${noteName}:`, error.message)
  process.exit(1)
}