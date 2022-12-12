import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import videoPlayerModule from "./store/videoPlayer.js";
const store = createStore(videoPlayerModule)

import './assets/main.css'

const app = createApp(App)

app.use(store)
app.use(router)

console.log(store.state.timeToContinue)

app.mount('#app')
