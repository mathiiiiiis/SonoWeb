import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init({
  duration: 1000,
  once: false,
  mirror: true,
  offset: 100
})

app.use(router)
app.mount('#app')