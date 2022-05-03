/*
Register directives
*/
import { registerDirectives } from "~/directives/primevue";

export default defineNuxtPlugin((nuxtApp) => {
  registerDirectives(nuxtApp.vueApp);
});
