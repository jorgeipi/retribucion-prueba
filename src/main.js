import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import router from '@/router/index'
// import { setupI18n } from '@ipicyt/i18n'
// import i18nFallback from '@ipicyt/plugins/i18n-fallback'
import 'aos/dist/aos.css'
import '@/styles/app.scss'

async function initApp() {
  const app = createApp(App)

  app.use(router)
  
  app.mount('#app')
}

initApp()
