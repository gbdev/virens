/*
This plugin is just used to register the Emulator component 
only in the *client* side, so SSR doesn't get crazy trying to 
load the WASM build.
*/

import Emulator from "./Emulator.vue";
import Medusa from "./Medusa.vue";
import Nes from "./Nes.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Emulator", Emulator);
  nuxtApp.vueApp.component("Medusa", Medusa);
  nuxtApp.vueApp.component("Nes", Nes);
});
