import { createApp } from 'vue'

// Local components 
import App from './App.vue'
import Game from './components/Game'
import Landing from './components/Landing'
import List from './components/List'

import Footer from './components/Footer'

// Tools
import axios from 'axios'
import * as VueRouter from 'vue-router';

// PrimeVue UI components
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Chip from 'primevue/chip';
import Slider from 'primevue/slider';

// Directives
import Tooltip from 'primevue/tooltip';

// Theming
import "primevue/resources/themes/mdc-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import 'primeflex/primeflex.css';
import './assets/style.scss';

// Routing
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

// Set up Vue app

// Returns app instance
app = createApp(App)

app.directive('tooltip', Tooltip);

// Returns root component instance
app.use(router)
   .use(PrimeVue)

// Enable components
app.component("Menubar", Menubar)
   .component("InputText", InputText)
   .component("Carousel", Carousel)
   .component("Button", Button)
   .component("Tag", Tag)
   .component("Chip", Chip)
   .component("Slider", Slider)
   .component("Footer", Footer)
   .mount('#app')

// Base API endpoint
//  Must point to an instance of the HHub-API (https://github.com/gbdev/homebrewhub)
app.config.globalProperties.baseAPI = 'https://hh3.gbdev.io'