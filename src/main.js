import { createApp } from "vue";
import { createPinia } from "pinia";
import router from './router/index.js'
import App from "./App.vue";
import "./assets/main.css";
createApp(App).use(router).use(createPinia()).mount("#app");
