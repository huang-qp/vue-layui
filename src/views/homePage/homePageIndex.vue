<template>
    <div id="homePageIndex">
        <div class="homePageContent">
            <el-container>
                <el-header>
<!--                    <HeadNavigationIndex/>-->
                    <el-menu
                            :default-active="activeIndex2"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                    </el-menu>
                </el-header>
                <el-container>
                    <el-scrollbar>
                        <el-aside style="width:auto;">
                            <el-menu default-active="1-4-1"
                                     class="el-menu-vertical-demo"
                                     @open="handleOpen"
                                     @close="handleClose"
                                     :collapse="isCollapse"
                                     background-color="#545c64"
                                     text-color="#fff"
                                     active-text-color="#ffd04b"
                            >
                                <SideVavigationIndex :routerArr=routerArr></SideVavigationIndex>
                            </el-menu>
                        </el-aside>
                    </el-scrollbar>
                    <el-container>
                        <el-main>
                            <div>
                                <el-breadcrumb separator-class="el-icon-arrow-right">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                        </el-main>
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
	// import HeadNavigationIndex from '@/components/HeadNavigation/HeadNavigationIndex.vue'//头部导航组件
	import SideVavigationIndex from '@/components/SideVavigation/SideVavigationIndex.vue'//侧边导航组件

	export default {
		name: "homePageIndex",
		components: {
			//someComponent
			// HeadNavigationIndex,
			SideVavigationIndex
		},
		
		data() {
			return {
				isCollapse: false,
				fold: true,
				unfold: false,
				routerArr: [
					{
						id: 1,
						lable: '首页',
						icon: 'el-icon-menu',
						navigationLevel: 1
					},
					{
						id: 2,
						lable: '一级导航',
						icon: 'el-icon-menu',
						navigationLevel: 1,
						children: [
							{
								id: 3,
								lable: '二级导航',
								icon: 'el-icon-menu',
								children: [
									{
										id: 4,
										lable: '三级导航',
										icon: 'el-icon-menu'
									}
								]
							}
						]
					}
				]
			}
		},
		
		methods: {
			//incident function（事件函数）
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			getFold() {
				this.isCollapse = true
				this.fold = false
				this.unfold = true
			},
			getUnfold() {
				this.isCollapse = false
				this.fold = true
				this.unfold = false
			}
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