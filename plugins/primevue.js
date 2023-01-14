/*
This plugin registers all the PrimeVue component and services.
*/

import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import ColorPicker from "primevue/colorpicker";
import Menubar from "primevue/menubar";
import DataView from "primevue/dataview";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Chip from "primevue/chip";
import Slider from "primevue/slider";
import SelectButton from "primevue/selectbutton";
import MultiSelect from "primevue/multiselect";
import Dropdown from "primevue/dropdown";
import ProgressSpinner from 'primevue/progressspinner';
import "../assets/styles/layout.scss";
import "../assets/styles/themes/dark-bs.css";

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
  nuxtApp.vueApp.component("SelectButton", SelectButton);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner);
});
