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

  // Leer el manifest generado para obtener los hashes
  const manifestPath = path.join(__dirname, `../dist/notes/${noteName}/manifest.json`)
  let cssFile = ''
  let jsFile = ''

  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
    jsFile = manifest['main.js'].file
    cssFile = manifest['main.js'].css?.[0] || ''
  } else {
    // Fallback: buscar archivos en el directorio
    const assetsDir = path.join(__dirname, `../dist/notes/${noteName}/assets`)
    const jsFiles = fs.readdirSync(path.join(assetsDir, 'js')).filter(f => f.endsWith('.js'))
    const cssFiles = fs.readdirSync(path.join(assetsDir, 'css')).filter(f => f.endsWith('.css'))
    
    if (jsFiles.length > 0) jsFile = `assets/js/${jsFiles[0]}`
    if (cssFiles.length > 0) cssFile = `assets/css/${cssFiles[0]}`
  }

  // Crear HTML con los hashes correctos
  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nota ${noteName}</title>
  ${cssFile ? `<link rel="stylesheet" href="./${cssFile}">` : ''}
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./${jsFile}"></script>
</body>
</html>`

  fs.writeFileSync(
    path.join(__dirname, `../dist/notes/${noteName}/index.html`),
    htmlContent
  )

  // Eliminar el manifest.json si existe
  if (fs.existsSync(manifestPath)) {
    fs.unlinkSync(manifestPath)
  }

  console.log(`✅ Nota compilada en: dist/notes/${noteName}`)
  console.log('Archivos generados:')
  console.log(fs.readdirSync(path.join(__dirname, `../dist/notes/${noteName}`)).join('\n'))

} catch (error) {
  console.error(`❌ Error compilando ${noteName}:`, error.message)
  process.exit(1)
}