import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import emitter from './plugins/bus'

import router from './router'

const app = createApp(App)

/**
 * 全域註冊emitter
 */
app.config.globalProperties.$emitter = emitter

app.use(createPinia())
app.use(router)

app.mount('#app')
