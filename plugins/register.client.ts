/*
This plugin is just used to register the Emulator component 
only in the *client* side, so SSR doesn't get crazy trying to 
load the WASM build.
*/

import Emulator from "./Emulator";
import Medusa from "./Medusa";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Emulator", Emulator);
  nuxtApp.vueApp.component("Medusa", Medusa);
});
