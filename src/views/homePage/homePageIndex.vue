<template>
    <div id="homePageIndex">
        <div class="homePageContent">
            <el-container>
                <el-header>
                    <HeadNavigationIndex/>
                </el-header>
                <el-container>
                    <el-aside style="width:auto;">
                        <SideVavigationIndex/>
                    </el-aside>
                    <el-container>
                        <el-main>Main</el-main>
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

                    .el-aside {
                        position: relative;
                        overflow-y: scroll;
                    }

                    .el-main {

                    }

                    .el-footer {
                        background-color: #ccc;
                    }
                }
            }
        }
    }
</style>