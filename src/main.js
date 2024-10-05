import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import router from "./router/routes.js";
import store from "./store/index.js";

axios.defaults.baseURL="http://localhost:8080"

const app = createApp(App)
app.use(router)
app.use(store)
app.provide('$axios', axios)
app.mount('#app')
