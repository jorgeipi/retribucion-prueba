import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let noteName = process.argv[2]?.trim()

if (!noteName) {
  console.error('❌ Error: Debes especificar el nombre de la nota')
  console.log('Uso: node scripts/compile-note.js <nombre-nota>')
  process.exit(1)
}

console.log(`📦 Compilando nota "${noteName}" como Web Component...`)

try {
  // 1. Limpieza del nombre
  noteName = noteName.replace(/\s+/g, '').toLowerCase()
  
  // 2. Verificar estructura del proyecto
  const notePath = path.join(__dirname, `../src/notes/${noteName}`)
  const mainJsPath = path.join(notePath, 'main.js')
  const appVuePath = path.join(notePath, 'App.vue')

  if (!fs.existsSync(notePath)) {
    throw new Error(`No existe el directorio para la nota en: src/notes/${noteName}`)
  }

  // 3. Validar archivos esenciales (Web Component version)
  const requiredFiles = {
    'main.js': mainJsPath,
    'App.vue': appVuePath
  }

  for (const [file, filePath] of Object.entries(requiredFiles)) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Falta el archivo requerido: ${file}`)
    }
  }

  // 4. Validar contenido de main.js (Web Component specific)
  const mainJsContent = fs.readFileSync(mainJsPath, 'utf-8')
  const wcKeywords = ['defineCustomElement', 'customElements.define']
  const isValidWC = wcKeywords.some(keyword => mainJsContent.includes(keyword))

  if (!isValidWC) {
    throw new Error(`
      El archivo main.js no es compatible con Web Components.
      Requiere: ${wcKeywords.join(' o ')}
    `.trim())
  }

  // 5. Compilar con Vite (multi-plataforma)
  const command = process.platform === 'win32'
    ? `set NOTE_NAME=${noteName} && vite build`
    : `NOTE_NAME=${noteName} vite build`

  console.log(`⚙️  Ejecutando: ${command}`)
  execSync(command, { stdio: 'inherit' })

  // 6. Verificar resultados
  const distPath = path.join(__dirname, `../dist/notes/${noteName}`)
  const expectedFiles = ['note-component.js', 'assets']

  if (!fs.existsSync(distPath)) {
    throw new Error('La compilación no generó archivos en /dist')
  }

  console.log('\n✅ Compilación exitosa!')
  console.log(`📂 Directorio generado: dist/notes/${noteName}`)
  console.log('\nArchivos generados:')
  console.log('├── ' + fs.readdirSync(distPath).join('\n├── '))

  // 7. Mensaje final de uso
  console.log(`
  🚀 Cómo usar tu Web Component:
  
  <script type="module" src="/dist/notes/${noteName}/note-component.js"></script>
  <note-${noteName}></note-${noteName}>
  `)

} catch (error) {
  console.error('\n❌ Error durante la compilación:', error.message)
  process.exit(1)
}