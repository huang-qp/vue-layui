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
          <el-button class="loginBtn" type="primary" @click="loginSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//import someComponent from './someComponent'
import {login} from '@/api/loginInterface';
// import axios from "axios";

export default {
  name: 'loginIndex',
  component: {
    //someComponent
  },

  data() {
    return {
      loginData: {
        account: '',
        password: ''
      }
    };
  },

  methods: {
    //incident function（事件函数）
    loginSubmit() {
      console.log(this)
      debugger
      login({
        url: '/backstage/loginIndex/loginData',
        data: this.loginData
      }).then((res) => {
        debugger
        if (res.result.code === '000000') {
          debugger
          this.$message({
            message: '登陆成功',
            type: 'success',
            center: true,
            offset: 200,
            onClose: () => {
              debugger
              this.$router.push({path: '/homePageIndex'});
            }
          });
          // 请求成功后将菜单保存在sessionStorage中
          sessionStorage.setItem('sideNavigationData', JSON.stringify(res.result.data))
          // 请求成功后经token存在cookie中
          this.$cookie.set('X-TOKEN',res.result.token)
        } else {
          this.$message({
            message: res.result.codeReason,
            type: 'error',
            center: true,
            offset: 200
          });
        }
      }).catch((error) => {
        console.log('登陆失败' + error);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#loginIndex {
  height: 100%;
  background-size: 100% 100%;
  background: url(~@/assets/picture/login.jpeg) no-repeat fixed center center;

  .loginContent {
    width: 25%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 80px 80px 60px 30px;
    background: rgba(0, 0, 0, 0.3);

    .loginBtn {
      width: 100%;
    }
  }
}
</style>