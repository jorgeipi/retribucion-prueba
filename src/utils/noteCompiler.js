export async function compileNote(noteName) {
  try {
    // 1. Cargar configuración dinámica
    const noteConfig = await import(`@notes/${noteName}/config.js`)
    
    // 2. Compilar componentes y estilos
    const { default: NoteComponent } = await import(`@notes/${noteName}/index.vue`)
    await import(`@notes/${noteName}/styles.scss`)
    
    // 3. Crear aplicación Vue para esta nota específica
    const app = createApp(NoteComponent)
    
    // 4. Configurar estilos globales
    import('@/styles/app.scss')
    
    // 5. Montar la aplicación
    app.mount('#app')
    
    // 6. Opcional: Devolver metadatos para el API
    return {
      success: true,
      noteName,
      assets: noteConfig.assets || []
    }
  } catch (error) {
    console.error(`Error compiling note ${noteName}:`, error)
    return { success: false, error: error.message }
  }
}