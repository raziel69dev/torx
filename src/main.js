import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import '@/assets/font/stylesheet.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(router, VueSmoothScroll)

app.mount('#app')
