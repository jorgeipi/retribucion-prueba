import { defineCustomElement } from 'vue'
import App from './App.vue'

// Convertir el componente Vue a Web Component
const NoteElement = defineCustomElement(App)

// Nombre dinámico para el custom element (ej: <note-ciencia3></note-ciencia3>)
const elementName = `note-${import.meta.env.NOTE_NAME.toLowerCase()}`

// Registrar el Web Component globalmente
customElements.define(elementName, NoteElement)

// Opcional: Exportar para uso programático
export default NoteElement