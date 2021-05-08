<template>
    <div id='SideNavigationIndex'>
        <div class='SideNavigationContent'>
                <template v-for="item in routerArr">
                    <el-menu-item v-if="!(item.children)" :index =item.route?item.route:item.id :key = item.id>
                        <i :class=item.icon></i>
                        <span slot="title">{{item.lable}}</span>
                    </el-menu-item>
                    <el-submenu v-if="item.children" :index =item.route?item.route:item.id :key = item.id>
                        <template slot="title">
                            <i :class=item.icon></i>
                            <span >{{item.lable}}</span>
                        </template>
                        <SideNavigationIndex :routerArr = item.children></SideNavigationIndex>
                    </el-submenu>
                </template>
        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
	//import someComponent from './someComponent'
	export default {
		name: "SideNavigationIndex",
		props: ['routerArr'],
		components: {
			//someComponent
		},
		
		data() {
			return {

			}
		},
		
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
    #SideNavigationIndex {
        .SideNavigationContent {

        }
    }
</style>