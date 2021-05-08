<template>
    <div id="homePageIndex">
        <div class="homePageContent">
<!--            头部导航栏-->
            <el-container>
                <el-header>
                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="headerMenuSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                    >
                        <el-menu-item class="headNavigationLeft" index="0" disabled><h2>后台管理系统</h2></el-menu-item>
                        <HeadNavigationIndex :routerArr=routerArr></HeadNavigationIndex>
                    </el-menu>
                </el-header>
<!--                侧边导航栏-->
                <el-container>
                    <el-scrollbar>
                        <el-aside style="width:auto;">
                            <el-menu default-active="this.$router.path"
                                     router
                                     class="el-menu-vertical-demo"
                                     @open="asideMenuOpen"
                                     @close="asideMenuClose"
                                     @select="asideMenuSelect"
                                     :collapse="isCollapse"
                                     background-color="#545c64"
                                     text-color="#fff"
                                     active-text-color="#ffd04b"
                            >
                                <SideNavigationIndex :routerArr=routerArr></SideNavigationIndex>
                            </el-menu>
                        </el-aside>
                    </el-scrollbar>
<!--                    页面中间内容-->
                    <el-container>
                        <el-main>
<!--                            面包屑-->
<!--                            <div>-->
<!--                                <el-breadcrumb separator-class="el-icon-arrow-right">-->
<!--                                    <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.id">{{item.lable}}-->
<!--                                    </el-breadcrumb-item>-->
<!--                                </el-breadcrumb>-->
<!--                            </div>-->
                            <BreadcrumbNavigationIndex :breadcrumbList = breadcrumbList></BreadcrumbNavigationIndex>
                            <router-view></router-view>
                        </el-main>
<!--                        底部内容-->
                        <el-footer>Footer</el-footer>
                    </el-container>
                </el-container>
            </el-container>
        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
	//import someComponent from './someComponent'
	import HeadNavigationIndex from '@/components/HeadNavigation/HeadNavigationIndex.vue'//头部导航组件
	import SideNavigationIndex from '@/components/SideNavigation/SideNavigationIndex.vue'//侧边导航组件
	import BreadcrumbNavigationIndex from '@/components/BreadcrumbNavigation/BreadcrumbNavigationIndex.vue'//面包屑导航组件
	// import store from '@/store/storeIndex'

	export default {
		name: "homePageIndex",
		components: {
			//someComponent
			HeadNavigationIndex,
			SideNavigationIndex,
			BreadcrumbNavigationIndex
		},
		
		data() {
			return {
				isCollapse: false,
				fold: true,
				unfold: false,
				routerArr: [
					{
						id: '1',
						lable: '首页',
						icon: 'el-icon-menu',
						navigationLevel: 1,
						route:'/homePageIndex'
					},
					{
						id: '2',
						lable: '一级导航',
						icon: 'el-icon-menu',
						navigationLevel: 1,
						children: [
							{
								id: '3',
								lable: '二级导航',
								icon: 'el-icon-menu',
								children: [
									{
										id: '4',
										lable: '三级导航',
										icon: 'el-icon-menu',
                                        route:'/aaa'
									}
								]
							}
						]
					}
				],
				routerArrAnalysis: [],//解析后的数组对象筛选菜单路径
				breadcrumbList: [] //解析后的数组对象用于面包屑渲染使用
			}
		},
		created() {
			this.getRouterArrAnalysis(this.routerArr)
		},
		methods: {
			/**
			 * 递归 多维数组对象转为一维数组对象
			 * @param {Array} routerArr [要解析的多维数组对象]
			 */
			getRouterArrAnalysis(routerArr) {
				routerArr.forEach(item => {
					if (item.children) {
						this.getRouterArrAnalysis(item.children)
					}
					this.routerArrAnalysis.push(item)
				})
			},
			//incident function（事件函数）
			/**
			 * 侧边导航栏点击展开的回调
			 * @param {String} key [当前点击展开的菜单id]
             * @param {Array} keyPath [当前菜单展开的路径菜单id]
			 */
			asideMenuOpen(key, keyPath) {
				this.breadcrumbList = []
				keyPath.forEach(item => {
					this.routerArrAnalysis.forEach(it => {
						if (item === it.id) {
							this.breadcrumbList.push(it)
						}
					})
				})
			},
			/**
			 * 侧边导航栏点击关闭的回调
			 * @param {String} key [当前点击展开的菜单id]
			 * @param {Array} keyPath [当前菜单展开的路径菜单id]
			 */
			asideMenuClose(key, keyPath) {
				this.breadcrumbList = []
				keyPath.forEach(item => {
					this.routerArrAnalysis.forEach(it => {
						if (item === it.id) {
							this.breadcrumbList.push(it)
						}
					})
				})
			},
			/**
			 * 侧边导航栏最后一级选中的回调
			 * @param {String} key [当前点击选中的菜单id]
			 * @param {Array} keyPath [当前菜单展开的路径菜单id]
			 */
			asideMenuSelect(key, keyPath) {
				debugger
				this.breadcrumbList = []
				keyPath.forEach(item => {
					this.routerArrAnalysis.forEach(it => {
						if (item === it.id) {
							this.breadcrumbList.push(it)
						}
					})
				})
			},
			/**
			 * 头部导航栏最后一级选中的回调
			 * @param {String} key [当前点击选中的菜单id]
			 * @param {Array} keyPath [当前菜单展开的路径菜单id]
			 */
			headerMenuSelect(key, keyPath) {
				console.log(key);
				console.log(keyPath);
			},

		}
	}
</script>

<style lang="scss" scoped>
    #homePageIndex {
        height: 100%;

        .homePageContent {
            height: 100%;

            .el-container {
                height: 100%;
                overflow: hidden;

                .el-header {
                    padding: 0;

                    .el-menu {
                        .headNavigationLeft {
                            line-height: 30px;
                            width: 200px;
                            cursor: default;

                            h2 {
                                text-align: center;
                            }
                        }
                    }
                }

                .el-container {
                    height: 100%;

                    .el-scrollbar {
                        /deep/ .el-scrollbar__wrap { //不加deep样式不生效 侧边导航会出现横向滚动条
                            overflow-x: hidden;
                            background-color: rgb(84, 92, 100);

                            .el-scrollbar__view {
                                height: 100%;

                                .el-aside {
                                    position: relative;
                                    height: 100%;

                                    .el-menu-vertical-demo:not(.el-menu--collapse) {
                                        width: 200px;
                                        height: 100%;
                                    }
                                }
                            }

                        }

                    }

                    .el-main {
                        overflow-y: scroll;
                        z-index: 10;
                    }

                    .el-footer {
                        background-color: #ccc;
                        height: 60px;
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                    }
                }
            }
        }
    }
</style>