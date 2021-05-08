<template>
    <div id='BreadcrumbNavigationIndex'>
        <div class='BreadcrumbNavigationIndexContent'>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.id">{{item.lable}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
	//import someComponent from './someComponent'
	export default {
		name: "BreadcrumbNavigationIndex",
		props: ['breadcrumbList'],
		components: {
			//someComponent
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

<style scoped>

</style>