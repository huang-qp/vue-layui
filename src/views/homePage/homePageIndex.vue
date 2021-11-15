<template>
  <div id="homePageIndex">
    <div class="homePageContent">
      <!--            头部导航栏-->
      <el-container>
        <el-header>
          <HeadNavigationIndex @asideNavigationZoom='asideNavigationZoom'></HeadNavigationIndex>
        </el-header>
        <!--                侧边导航栏-->
        <el-container>
          <el-scrollbar>
            <el-aside style="width:auto;">
              <el-menu :collapse="isCollapse"
                       active-text-color="#ffd04b"
                       background-color="#545c64"
                       class="el-menu-vertical-demo"
                       :default-active="this.$route.path"
                       router
                       text-color="#fff"
                       @close="asideMenuClose"
                       @open="asideMenuOpen"
                       @select="asideMenuSelect"
              >
                <SideNavigationIndex :sideNavigationData=sideNavigationData></SideNavigationIndex>
              </el-menu>
            </el-aside>
          </el-scrollbar>
          <!--                    页面中间内容-->
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
            <!--                        底部内容-->
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
  <!--<someComponent></someComponent>-->
</template>

<script>
//import someComponent from './someComponent'
import HeadNavigationIndex from '@/components/HeadNavigation/HeadNavigationIndex.vue'//头部导航组件
import SideNavigationIndex from '@/components/SideNavigation/SideNavigationIndex.vue'//侧边导航组件
// import {getSideNavigationData} from '@/api/homePageIndex'
// import store from '@/store/storeIndex'

export default {
  name: "homePageIndex",
  components: {
    //someComponent
    HeadNavigationIndex,
    SideNavigationIndex,
  },

  data() {
    return {
      isCollapse: true,
      fold: true,
      unfold: false,
      sideNavigationData: []//侧边导航栏数据
    }
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
    this.sideNavigationData = JSON.parse(sessionStorage.getItem('sideNavigationData'))
    debugger
  },
  mounted() {

  },
  methods: {
    //incident function（事件函数）
    /**
     * 侧边导航栏点击展开的回调
     * @param {String} key [当前点击展开的菜单id]
     * @param {Array} keyPath [当前菜单展开的路径菜单id]
     */
    asideMenuOpen(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    },
    /**
     * 侧边导航栏点击关闭的回调
     * @param {String} key [当前点击展开的菜单id]
     * @param {Array} keyPath [当前菜单展开的路径菜单id]
     */
    asideMenuClose(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    },
    /**
     * 侧边导航栏最后一级选中的回调
     * @param {String} key [当前点击选中的菜单id]
     * @param {Array} keyPath [当前菜单展开的路径菜单id]
     */
    asideMenuSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
      console.log(this.$route.fullPath);
      console.log(this.$route);
      console.log(this.$router);
      console.log(this.$router.options.routes);
      console.log(this.$parent);
    },
    /**
     * 接受头部导航子组件传过来的参数改变侧边导航收放
     * @param {Boolean} data [子组件传过来的值]
     */
    asideNavigationZoom(data) {
      this.isCollapse = data
    }
  }
}
</script>

<style lang="scss" scoped>
#homePageIndex {
  height: 100%;

  .homePageContent {
    height: 100%;

    .el-container {
      height: 100%;
      overflow: hidden;

      .el-header {
        padding: 0;
      }

      .el-container {
        height: 100%;

        .el-scrollbar {
          /deep/ .el-scrollbar__wrap { //不加deep样式不生效 侧边导航会出现横向滚动条
            overflow-x: hidden;
            background-color: rgb(84, 92, 100);

            .el-scrollbar__view {
              height: 100%;

              .el-aside {
                position: relative;
                height: 100%;

                .el-menu-vertical-demo:not(.el-menu--collapse) {
                  width: 200px;
                  height: 100%;
                }

                .el-menu--collapse {
                  height: 100%;
                }
              }
            }
          }
        }

        .el-main {
          overflow-y: scroll;
          z-index: 10;
        }

        .el-footer {
          background-color: #ccc;
          height: 60px;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
      }
    }
  }
}
</style>