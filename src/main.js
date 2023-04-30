/* eslint-disable vue/no-reserved-component-names */
// Primevue
import Button from 'primevue/button'
import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import App from './App.vue'
import emitter from './plugins/bus'
import pinia from './plugins/pinia'
import router from './router'

const app = createApp(App)

const init = async vueApp => {
  /**
   * 全域註冊emitter
   */
  vueApp.config.globalProperties.$emitter = emitter

  /**
   * 動態註冊全域組件
   */
  const dynamicImportComponents = async () => {
    const requireComponent = import.meta.glob('./components/global/**/*.vue')
    const requireKeys = Object.keys(requireComponent)

    for (let i = 0; i < requireKeys.length; i++) {
      const moduleName = requireKeys[i]
      const mod = await requireComponent[moduleName]()
      const split = moduleName.split('/')
      const name = split[split.length - 1].split('.')[0]
      vueApp.component(name, mod.default)
    }
  }
  await dynamicImportComponents()

  vueApp.use(router)
  vueApp.use(VueDOMPurifyHTML)
  vueApp.use(pinia)
  vueApp.use(PrimeVue)

  vueApp.component('Button', Button)
  vueApp.component('Dropdown', Dropdown)
  vueApp.component('InputSwitch', InputSwitch)
  vueApp.component('InputText', InputText)

  vueApp.mount('#app')
}

init(app)
