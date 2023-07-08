import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import moment from "moment";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { useAuthStore } from './stores/authStore';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(pinia);
app.use(VueAxios, axios);
app.use(router);
app.config.globalProperties.$moment = moment;
app.mount("#app");


axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
let authStore = useAuthStore()
axios.defaults.headers.common['token'] = authStore.token;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.baseURL = globalStore.apiUrl;
// let url = new URL(axios.defaults.baseURL)
// app.config.globalProperties.$assetUrl=url.origin+'/public/';