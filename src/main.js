import { createApp } from 'vue'

import App from './App.vue'
import Game from './components/Game.vue'
import Landing from './components/Landing'
import List from './components/List'

import axios from 'axios'
import * as VueRouter from 'vue-router';

import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';


import "primevue/resources/themes/mdc-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import 'primeflex/primeflex.css';
import './assets/style.scss';

const routes = [
    { path: '/game/:slug', component: Game },
    { path: '/', component: Landing },
    { path: '/games', component: List}
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component("Menubar", Menubar)
    .component("InputText", InputText)
    .component("Carousel", Carousel)
    .component("Button", Button)
    .mount('#app')