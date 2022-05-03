import { defineNuxtConfig } from 'nuxt'

const { __dirname } = createCommonJS(import.meta.url)
import { resolve } from 'path'
import { createCommonJS } from 'mlly'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        "primeflex/primeflex.css",
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
        
    ],
    build: {
        transpile: ['primevue']
    },
    hooks: {
        'pages:extend' (pages) {
          pages.push({
            name: 'gbcompo21',
            path: '/gbcompo21',
            file: resolve(__dirname, 'pages/index.vue')
          })
        }
      }
})
