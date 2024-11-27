import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'
addIcons(FaFlag, RiZhihuFill)
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
