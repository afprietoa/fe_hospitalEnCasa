import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.js'

createApp(App).use(router).mount('#app')
