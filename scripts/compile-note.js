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
  // Verificar que existe la nota
  const notePath = path.join(__dirname, `../src/notes/${noteName}`)
  if (!fs.existsSync(notePath)) {
    throw new Error(`No existe la nota ${noteName} en src/notes/`)
  }

  // Verificar archivos requeridos
  const requiredFiles = ['main.js', 'App.vue']
  requiredFiles.forEach(file => {
    if (!fs.existsSync(path.join(notePath, file))) {
      throw new Error(`Falta archivo requerido: ${file}`)
    }
  })

  // Compilar con Vite
  const command = process.platform === 'win32'
    ? `set NOTE_NAME=${noteName} && vite build`
    : `NOTE_NAME=${noteName} vite build`

  console.log(`Ejecutando: ${command}`)
  execSync(command, { stdio: 'inherit' })

  // Crear HTML de prueba
  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nota ${noteName}</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./assets/js/main.js"></script>
</body>
</html>`

  fs.writeFileSync(
    path.join(__dirname, `../dist/notes/${noteName}/index.html`),
    htmlContent
  )

  console.log(`✅ Nota compilada en: dist/notes/${noteName}`)
  console.log('Archivos generados:')
  console.log(fs.readdirSync(path.join(__dirname, `../dist/notes/${noteName}`)).join('\n'))

} catch (error) {
  console.error(`❌ Error compilando ${noteName}:`, error.message)
  process.exit(1)
}