import { compileNote } from '@/utils/noteCompiler'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

async function deployNote(noteName) {
  // 1. Compilar la nota
  const result = await compileNote(noteName)
  
  if (!result.success) {
    throw new Error(`Failed to compile note: ${result.error}`)
  }
  
  // 2. Mover assets al directorio dist
  const distPath = path.join(__dirname, `dist/note-${noteName}`)
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true })
  }
  
  // 3. Copiar archivos (usar fs-extra para mejor manejo)
  // ... lógica para copiar archivos ...
  
  // 4. Notificar al API de Laravel
  await axios.post('https://tu-api.com/notes/update', {
    noteName,
    assets: result.assets,
    compiledAt: new Date().toISOString()
  })
  
  console.log(`Note ${noteName} deployed successfully!`)
}

// Uso: node scripts/deployNote.js ciencia3
const noteName = process.argv[2]
deployNote(noteName).catch(console.error)