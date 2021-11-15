<template>
  <fragment id='SideNavigationIndex'>
    <fragment class='SideNavigationContent'>
      <template v-for="item in sideNavigationData">
        <el-menu-item v-if="item.children&&item.children.length===0"
                      :key=item.menuId
                      :index="item.route?item.route:item.menuId.toString()"
                      @click="getRouter(item)"
        >
          <i :class=item.icon></i>
          <span slot="title">{{ item.menuName }}</span>
        </el-menu-item>
        <el-submenu v-else :key=item.menuId :index="item.route?item.route:item.menuId.toString()">
          <template slot="title">
            <i :class=item.icon></i>
            <span slot="title">{{ item.menuName }}</span>
          </template>
          <SideNavigationIndex :sideNavigationData=item.children></SideNavigationIndex>
        </el-submenu>
      </template>
    </fragment>
  </fragment>
  <!--<someComponent></someComponent>-->
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "SideNavigationIndex",
  props: ['sideNavigationData'],
  components: {
    //someComponent
  },

  data() {
    return {}
  },

  methods: {
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
  mounted() {
    console.log(this.sideNavigationData, 'sideNavigationData');

  }
}
</script>

<style lang="scss" scoped>
#SideNavigationIndex {
  .SideNavigationContent {

  }
}
</style>