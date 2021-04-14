<template>
    <div id="loginIndex">
        <div class="loginContent">
            <el-form label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="loginData.account"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginData.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginBtn" type="primary" @click="login()">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
	//import someComponent from './someComponent'
	export default {
		name: "loginIndex",
		component: {
			//someComponent
		},
		
		data() {
			return {
				loginData: {
					account: '',
					password: ''
				}
			}
		},
		
		methods: {
			//incident function（事件函数）
			login() {
				if (this.loginData.account === 'admin' && this.loginData.password === '123') {
					alert('登陆成功')
                    this.$router.push({path:'/homePageIndex'})
				}else {
					alert('账号密码错误')
                }
			}
		}
	}
</script>

<style lang="scss" scoped>
    #loginIndex{
        height: 100%;
        background: url(~@/assets/picture/login.jpeg) no-repeat center center;
        background-size:100% 100%;
        background-attachment:fixed;
        .loginContent{
            width: 25%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            padding: 80px 80px 60px 30px;
            background: rgba(0,0,0,0.3);
            .loginBtn{
                width: 100%;
            }
        }
    }
</style>