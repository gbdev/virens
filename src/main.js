
import App from './App.vue'
import Game from './components/Game.vue'

import axios from 'axios'
import * as VueRouter from 'vue-router';
import * as Vue from 'vue';

const routes = [
  { path: '/game/:slug', component: Game },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = Vue.createApp(App)

app.use(router)

app.mount('#app')

