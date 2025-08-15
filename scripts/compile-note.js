import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const NOTE_NAME = 'eneceb1';
const DIST_DIR = path.join(PROJECT_ROOT, `dist/${NOTE_NAME}`);
const NOTE_DIR = path.join(PROJECT_ROOT, `src/notes/${NOTE_NAME.toUpperCase()}`);

async function compileNote() {
  try {
    console.log(`🛠️  Compilando nota ${NOTE_NAME}...`);
    
    // Limpiar directorio de destino
    await fs.remove(DIST_DIR);
    await fs.ensureDir(DIST_DIR);
    
    // Copiar assets estáticos
    if (await fs.pathExists(path.join(NOTE_DIR, 'assets'))) {
      await fs.copy(
        path.join(NOTE_DIR, 'assets'),
        path.join(DIST_DIR, 'assets')
      );
    }
    
    // Compilar con Vite
    process.env.VITE_NOTE_NAME = NOTE_NAME;
    execSync(`vite build --mode production`, {
      cwd: PROJECT_ROOT,
      env: { ...process.env, NOTE: 'ENECEB1' },
      stdio: 'inherit'
    });
    
    // Mover index.html a la raíz si es necesario
    await ensureHtmlInRoot(DIST_DIR);
    
    console.log('✅ Nota compilada correctamente en:', DIST_DIR);
    
  } catch (error) {
    console.error('❌ Error durante la compilación:', error.message);
    process.exit(1);
  }
}

async function ensureHtmlInRoot(distDir) {
  const possibleHtmlPaths = [
    path.join(distDir, 'index.html'),
    path.join(distDir, 'src/notes/eneceb1/index.html')
  ];
  
  for (const htmlPath of possibleHtmlPaths) {
    if (await fs.pathExists(htmlPath)) {
      // Si está en una subcarpeta, moverlo a la raíz
      if (htmlPath !== path.join(distDir, 'index.html')) {
        await fs.move(htmlPath, path.join(distDir, 'index.html'), { overwrite: true });
        console.log('ℹ️ Movido index.html a la raíz del directorio de distribución');
      }
      break;
    }
  }
}

compileNote();