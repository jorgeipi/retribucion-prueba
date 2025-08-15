export const useAsset = (noteName) => {
  const env = import.meta.env;
  const isCompiled = env.MODE !== 'development';

  const resolvePath = (relativePath) => {
    if (!isCompiled) {
      // Desarrollo: Usa la ruta física del proyecto
      return `/src/notes/${noteName}/assets/${relativePath}`;
    }
    
    // Producción: Ruta relativa desde la raíz de la nota compilada
    return `./assets/${relativePath}`;
  };

  return {
    url: resolvePath,
    note: noteName
  };
};