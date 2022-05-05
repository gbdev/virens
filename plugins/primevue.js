/*
This plugin registers all the PrimeVue component and services.
*/

import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import ColorPicker from "primevue/colorpicker";
import Menubar from "primevue/menubar";
import DataView from "primevue/dataview";
import Chip from "primevue/chip";
import Slider from "primevue/slider";
import "../assets/styles/layout.scss";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("ColorPicker", ColorPicker);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("DataView", DataView);
  nuxtApp.vueApp.component("Chip", Chip);
  nuxtApp.vueApp.component("Slider", Slider);
});
