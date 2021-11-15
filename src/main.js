import Vue from 'vue'
import App from './App.vue'

// 引入全局路由
import router from '@/router/globalRouting.js'
//全局引入element-ui
import ElementUI from 'element-ui'
//全局引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
//开发环境下才会引入mockjs
process.env.MOCK && require('@/mock/mockIndex.js')
// 引入store
import store from '@/store/storeIndex.js'
//vue 编码但不渲染的标签 vue-fragment（循环渲染导航时使用）
import Fragment from 'vue-fragment'
import VueCookie from 'vue-cookie'
import VueSession from 'vue-session'
Vue.config.productionTip = false

Vue.use(ElementUI).use(Fragment.Plugin).use(VueCookie).use(VueSession)
Vue.prototype.$cookie=VueCookie
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
