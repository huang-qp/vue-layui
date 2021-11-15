<template>
  <div id="HeadNavigationIndex">
    <div class="HeadNavigationContent">
      <template>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            @select="headerMenuSelect"
        >
          <el-menu-item v-if="fold" class="headNavigationLeft" disabled index="0"><h2>后台管理系统</h2></el-menu-item>
          <el-menu-item v-show="!fold" class="headNavigationLeftIncome" disabled index="0"><h2>后台</h2></el-menu-item>
          <span class="retractButton" @click="zoom">
            <i v-show="fold" class="el-icon-s-fold"></i>
            <i v-show="!fold" class="el-icon-s-unfold"></i>
          </span>
          <BreadcrumbNavigationIndex></BreadcrumbNavigationIndex>
        </el-menu>

      </template>

    </div>
  </div>
  <!--<someComponent></someComponent>-->
</template>

<script>
//import someComponent from './someComponent'
import BreadcrumbNavigationIndex from "@/components/BreadcrumbNavigation/BreadcrumbNavigationIndex";

export default {
  name: "HeadNavigationIndex",
  props: [],
  components: {
    //someComponent
    BreadcrumbNavigationIndex
  },

  data() {
    return {
      fold: false//点击头部导航收放按钮向父组件传的值
    };
  },
  created() {
    // 加载时调用一次收放事件，否则侧边栏第一次加载时不渲染
    this.zoom()
  },
  methods: {
    /**
     * 头部导航收放按钮点击事件
     */
    zoom() {
      this.$emit('asideNavigationZoom', this.fold)
      this.fold = !this.fold

    },
    /**
     * 头部导航栏最后一级选中的回调
     * @param {String} key [当前点击选中的菜单id]
     * @param {Array} keyPath [当前菜单展开的路径菜单id]
     */
    headerMenuSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    },
  }
}
</script>

<style lang='scss' scoped>
#HeadNavigationIndex {
  .HeadNavigationContent {
    .el-menu {
      .headNavigationLeft {
        line-height: 30px;
        width: 200px;
        cursor: default;

        h2 {
          text-align: center;
        }
      }

      .headNavigationLeftIncome {
        line-height: 30px;
        width: 65px;
        cursor: default;

        h2 {
          text-align: center;
        }
      }

      .retractButton {
        font-size: 30px;
        line-height: 60px;
      }
    }

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