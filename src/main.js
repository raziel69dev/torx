import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.scss'
import '@/assets/font/stylesheet.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { cart } from './js/cart'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

app.use(router, VueSmoothScroll, Notifications)

app.mount('#app')

if (localStorage.getItem('userCart')) {
    cart.items = JSON.parse(localStorage.getItem('userCart'))

}


