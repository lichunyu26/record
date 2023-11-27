import {createApp} from 'vue'
import {createPinia} from 'pinia'
//pinia数据持久化存储
import {createPersistedState} from 'pinia-plugin-persistedstate'
import router from './router'

import "normalize.css"
import "@/style/reset.css"
import "@/style/global.less"
// 解决因为unplugin-auto-import自动导入导致的eslint报错
import 'vue-global-api'

import App from './App.vue'
//创建Vue实例
const vueAppImpl = createApp(App)
const pinia = createPinia()

pinia.use(createPersistedState({
    auto: true
}))
vueAppImpl.use(pinia).use(router)


vueAppImpl.mount('#app')
