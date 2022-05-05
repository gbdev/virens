import { App } from "vue";

import Tooltip from "primevue/tooltip";
import StyleClass from "primevue/styleclass";

export function registerDirectives(app: App): void {
  app.directive("tooltip", Tooltip);
  app.directive("styleclass", StyleClass);
}
