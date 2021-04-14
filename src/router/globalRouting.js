import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const router = new Router({
	routes:[
		{ //重定向 登陆首页
			path:'/',
			name:'loginIndex',
			component: ()=>import('@/views/login/loginIndex.vue')
		},
		{ //首页
			path:'/homePageIndex',
			name:'homePageIndex',
			component: ()=>import('@/views/homePage/homePageIndex.vue')
		},
		// {
		// 	path:'/index',
		// 	name:'index',
		// 	component: ()=>import('../App.vue')
		// },
		// {
		// 	path:'/search',
		// 	name:'search',
		// 	component: ()=>import('@/components/search/search.vue')
		// },
		// {
		// 	path:'/view',
		// 	name:'view',
		// 	component: ()=>import('@/views/ViewIndex.vue')
		// }
	
	]
})
export default router
