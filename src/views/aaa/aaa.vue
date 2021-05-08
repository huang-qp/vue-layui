<template>
    <div id='aaa'>
        {{msg}}
        <div class='aaaContent'>

        </div>
    </div>
    <!--<someComponent></someComponent>-->
</template>

<script>
	//import someComponent from './someComponent'
	export default {
		name: "aaa",
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