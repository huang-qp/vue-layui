<template>
    <div id="homePageIndex">
        <div class="homePageContent">
            <el-container>
                <el-header>
                    <HeadNavigationIndex/>
                </el-header>
                <el-container>
                    <el-scrollbar style="height:100%;">
                        <el-aside style="width:auto;">
                            <SideVavigationIndex/>
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
	import HeadNavigationIndex from '@/components/HeadNavigation/HeadNavigationIndex.vue'
	import SideVavigationIndex from '@/components/SideVavigation/SideVavigationIndex.vue'

	export default {
		name: "homePageIndex",
		components: {
			//someComponent
			HeadNavigationIndex,
			SideVavigationIndex
		},
		
		data() {
			return {
				msg: "Hello Vue.js"
			}
		},
		
		methods: {
			//incident function（事件函数）
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
                    .el-scrollbar{
                        /deep/ .el-scrollbar__wrap{//不加deep样式不生效 侧边导航会出现横向滚动条
                            overflow-x: hidden;
                            background-color: rgb(84, 92, 100);
                            .el-aside {
                            position: relative;
                            // overflow-y: scroll;
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