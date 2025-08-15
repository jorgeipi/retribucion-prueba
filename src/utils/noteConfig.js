   export const getNoteConfig = (noteName) => {
     const baseConfig = require('@/notes/_template/config.json');
     const noteConfig = require(`@/notes/${noteName}/config.json`);
     return { ...baseConfig, ...noteConfig };
   };