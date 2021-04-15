<template>
    <div id="HeadNavigationIndex">
        <div class="HeadNavigationContent">
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item class="headNavigationRight" index="0" disabled><h2>后台管理系统</h2></el-menu-item>
                <div class="headNavigationRightSearch" index="9">
                    <el-input placeholder="请输入查询内容" v-model="searchValue"></el-input>
                </div>
                <el-menu-item class="headNavigationLeft" index="1">处理中心</el-menu-item>
                <el-submenu class="headNavigationLeft" index="2">
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
                <el-menu-item class="headNavigationLeft" index="3" disabled>消息中心</el-menu-item>
                <el-menu-item class="headNavigationLeft" index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
	//import someComponent from './someComponent'
	export default {
		name: "HeadNavigationIndex",
		component: {
			//someComponent
		},
		
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
                searchValue:''
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
    #HeadNavigationIndex{
        .HeadNavigationContent{
            .el-menu-demo.el-menu--horizontal.el-menu{
                .headNavigationLeft{
                    float: right;
                }
                .headNavigationRight{
                    line-height: 30px;
                    width: 200px;
                    cursor: default;
                    h2{
                        text-align: center;
                    }
                }
                .headNavigationRightSearch{
                        float: left;
                        height: 60px;
                        line-height: 60px;
                }
            }
        }
    }
</style>