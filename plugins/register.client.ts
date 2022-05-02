import GameEmulator from "./gameemulator";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("GameEmulator", GameEmulator);
});
