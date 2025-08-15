import { createApp } from 'vue';
import App from './index.vue';

// Importa tus estilos globales si es necesario
import '@/styles/app.scss';

const app = createApp(App);
app.mount('#app');