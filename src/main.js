import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const app = createApp(App)
app.use(createPinia())
app.use(router)

AOS.init({ duration: 700, once: true, offset: 60 })

app.mount('#app')
