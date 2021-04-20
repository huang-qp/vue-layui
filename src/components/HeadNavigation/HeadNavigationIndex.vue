<template>
    <div id="HeadNavigationIndex">
        <div class="HeadNavigationContent">
            <template v-for="item in routerArr">
                <el-menu-item :class="item.navigationLevel==1?'headNavigationRight':''" v-if="!(item.children)"
                              :index=item.id :key=item.id>
                    {{item.lable}}
                </el-menu-item>
                <el-submenu :class="item.navigationLevel==1?'headNavigationRight':''" v-if="item.children"
                            :index=item.id :key=item.id>
                    <template slot="title">
                        {{item.lable}}
                    </template>
                    <HeadNavigationIndex :routerArr=item.children :mm=true></HeadNavigationIndex>
                </el-submenu>
            </template>
        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
	//import someComponent from './someComponent'
	export default {
		name: "HeadNavigationIndex",
		props: ['routerArr', 'mm'],
		component: {
			//someComponent
		},
		
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				searchValue: ''
			};
		},
		
		methods: {
			//incident function（事件函数）
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang='scss' scoped>
    #HeadNavigationIndex {
        .HeadNavigationContent {
            .headNavigationRight {
                float: right;
            }

            .headNavigationRightSearch {
                float: left;
                height: 60px;
                line-height: 60px;
            }
        }
    }
</style>