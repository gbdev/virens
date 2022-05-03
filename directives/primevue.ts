import { App } from 'vue'

import Tooltip from 'primevue/tooltip'

export function registerDirectives(app: App): void {
    app.directive('tooltip', Tooltip)
}
