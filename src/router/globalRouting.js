import Vue from 'vue'
import Router from 'vue-router'

/* eslint-disable no-unused-vars */  //暂时关闭严格模式检查
const homePageIndex = () => import('@/views/login/loginIndex.vue')//首页
const documentationIndex = () => import('@/views/documentation/documentationIndex.vue')//文件
const guideIndex = () => import('@/views/guide/guideIndex.vue')//指南
// 权限
const pagePermissionIndex = () => import('@/views/permission/pagePermission/pagePermissionIndex.vue')//页面权限
const directivePermissionIndex = () => import('@/views/permission/directivePermission/directivePermissionIndex.vue')//指令权限
const rolePermissionIndex = () => import('@/views/permission/rolePermission/rolePermissionIndex.vue')//角色权限

const iconsIndex = () => import('@/views/icons/iconsIndex.vue')//图标
//组件
const tinymceIndex = () => import('@/views/components/tinymce/tinymceIndex.vue')//文本编辑器
const markdownIndex = () => import('@/views/components/markdown/markdownIndex.vue')//编辑器
const jsonEditorIndex = () => import('@/views/components/jsonEditor/jsonEditorIndex.vue')//JSON编辑器
/* eslint-enable no-unused-vars */  //开启严格模式


Vue.use(Router)
const router = new Router({
    routes: [
        { //重定向 登陆首页
            path: '/',
            name: 'loginIndex',
            component: () => import('@/views/login/loginIndex.vue'),
            meta: {title: '控制面板', icon: 'el-icon-menu'},
        }
    ]
})
// let asyncRoutes = {}
// let asyncRoutesArray = []
// let menuRouter = JSON.parse(sessionStorage.getItem('sideNavigationData'))
// if(menuRouter){
//     router.addRoute(menuRouter)
// }

router.beforeEach((to, form, next) => {
    debugger
    // 访问登陆页面无需权限 直接放行
    if (to.path === '/') return next()
    //访问有权限的菜单 获取token
    let token = Vue.prototype.$cookie.get('X-TOKEN')
    // 如果没有token 返回登陆页
    if (!token) return next('/')
    //获取菜单
    let menuRouter = JSON.parse(sessionStorage.getItem('sideNavigationData'))
    /**
    * @description: 递归修改router的component
    * @param {Array} menuRouter 需要循环的router数组
    * @return:
    * @example：
    */
    function editRoutesComponent(menuRouter){
        menuRouter.forEach(item => {
            if(item.children.length===0){
                //1.eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
                //2.eval()方法会将后端返回的component字符串，转换成对应的，声明的component常量
                item.component = eval(item.component)
            }else{
                delete item.path
                editRoutesComponent(item.children)
            }

        })
    }
    // 递归修改router的component
    editRoutesComponent(menuRouter)
    // 添加修改后的动态路由
    menuRouter.forEach(item=>{
        router.matcher.addRoute(item)
    })
    console.log(token);
    console.log(to);
    console.log(form);
    console.log(next);
    next()
})

export default router
