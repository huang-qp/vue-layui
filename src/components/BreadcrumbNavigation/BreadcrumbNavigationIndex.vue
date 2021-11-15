<template>
  <div id='BreadcrumbNavigationIndex'>
    <div class='BreadcrumbNavigationIndexContent'>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <template v-for="item in getBreadcrumbNavigationList">
          <el-breadcrumb-item v-if="item.parentName&&item.parentName!==''" :key="item.parentName" :style="{'cursor':'pointer'}">
            {{ item.parentName }}
          </el-breadcrumb-item>
          <el-breadcrumb-item :key="item.route" @click.native="getRouter(item)" :to="{path:item.route}" :style="{'cursor':'pointer'}">
            {{ item.menuName }}
          </el-breadcrumb-item>
        </template>

      </el-breadcrumb>
    </div>
  </div>
  <!--<someComponent></someComponent>-->
</template>

<script>
//import someComponent from './someComponent'
import {mapActions} from "vuex";

export default {
  name: "BreadcrumbNavigationIndex",
  components: {
    //someComponent
  },

  data() {
    return {}
  },

  methods: {
    //incident function（事件函数）
    // 引入vuex中的方法 注意：引用时使用数组 ...mapActions([transferProcessingNavigationData']) 会报 unknown action type 错误
    ...mapActions({'transferProcessingNavigationData': 'breadcrumbNavigation/transferProcessingNavigationData'}),
    /**
     * 侧边导航栏最后一级点击事件，调取vuex中的方法将数据存入vuex中，供面包屑使用
     * @param {Object} data [要存入vuex中的数据]
     */
    getRouter(data) {
      this.transferProcessingNavigationData(data)
    }
  },
  computed: {
    /**
     * 获取vuex中的数据并赋值
     * @return{Array} breadcrumbNavigationDataList [渲染面包屑数据数组]
     */
    getBreadcrumbNavigationList() {
      let breadcrumbNavigationDataList = []
      if (this.$store.state.breadcrumbNavigation.breadcrumbNavigationList.length !== 1) {
        breadcrumbNavigationDataList = this.$store.state.breadcrumbNavigation.breadcrumbNavigationList
      }else{
        breadcrumbNavigationDataList = JSON.parse(sessionStorage.getItem("breadcrumbNavigationList"))
      }
      return breadcrumbNavigationDataList
    }
  }

}
</script>

<style lang="scss" scoped>
#BreadcrumbNavigationIndex {
  display: inline-block;
  margin-left: 20px;

  .BreadcrumbNavigationIndexContent {
    .el-breadcrumb {
      .el-breadcrumb__item {
        /deep/ .el-breadcrumb__inner {
          line-height: 24px;
          font-size: 16px;
          color: white;
        }
      }
    }
  }
}
</style>