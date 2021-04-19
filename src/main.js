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


Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
