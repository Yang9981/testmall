import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'
/* import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; */


createApp(App).use(router,ElementPlus).mount('#app')
