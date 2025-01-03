const { __dirname } = createCommonJS(import.meta.url);
import { resolve } from "path";
import { createCommonJS } from "mlly";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["~/modules/sitemap"],
  sitemap: {
    hostname: "https://hh.gbdev.io",
  },
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
  nitro: {
    prerender: {
      ignore: ["/games", "/demos", "/music", "/tools"],
    },
  },

  hooks: {
    // By default, we use "pages" routing, matching the paths under /pages
    // Here we add some additional routes
    "pages:extend"(pages) {
      pages.push(
        // /demos, /games and /gbcompo21 should just point to the games view. We'll change the api call there, based on the matched path.
        {
          name: "gbcompo21",
          path: "/events/gbcompo21",
          file: resolve(__dirname, "pages/games.vue"),
        },
        {
          name: "gbajam22",
          path: "/events/gbajam22",
          file: resolve(__dirname, "pages/games.vue"),
        },
        {
          name: "gba",
          path: "/games/gba",
          file: resolve(__dirname, "pages/games.vue"),
        },
        {
          name: "demos",
          path: "/demos",
          redirect: "/search?typetag=demo",
        },
        {
          name: "games",
          path: "/games",
          redirect: "/search?typetag=game",
        },
        {
          name: "tools",
          path: "/tools",
          redirect: "/search?typetag=tool",
        },
        {
          name: "music",
          path: "/music",
          redirect: "/search?typetag=music",
        },
      );
    },
  },
});
