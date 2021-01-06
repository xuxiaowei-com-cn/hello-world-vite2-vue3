import { createApp } from 'vue'
import App from '/src/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

import router from '/src/router/nested'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

app.mount('#app')
