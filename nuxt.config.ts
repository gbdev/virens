import { defineNuxtConfig } from "nuxt";

const { __dirname } = createCommonJS(import.meta.url);
import { resolve } from "path";
import { createCommonJS } from "mlly";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_API_URL: process.env.BASE_API_URL || "https://hh3.gbdev.io",
    },
  },
  css: [
    "primeflex/primeflex.css",
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  hooks: {
    // By default, we use "pages" routing, matching the paths under /pages
    // Let's add some additional routes
    "pages:extend"(pages) {
      pages.push(
        // /demos, /games and /gbcompo21 should just point to the games view. We'll change the api call there, based on the matched path.
        {
          name: "gbcompo21",
          path: "/games/gbcompo21",
          file: resolve(__dirname, "pages/games.vue"),
        },
        {
          name: "demos",
          path: "/demos",
          file: resolve(__dirname, "pages/games.vue"),
        },
        {
          name: "hb",
          path: "/hb",
          file: resolve(__dirname, "pages/games.vue"),
        },
        {
          name: "music",
          path: "/music",
          file: resolve(__dirname, "pages/games.vue"),
        }
      );
    },
  },
});
