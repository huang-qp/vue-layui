<template>
  <div id="iconsIndex"></div>
</template>

<script>
// import someComponent from './someComponent'
// 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
// Vue.http.options.root = '';
// 全局启用 emulateJSON 选项
//Vue.http.options.emulateJSON = true;
export default {
  components: {},
  name: 'iconsIndex',
  //存放 数据
  data: function () {
    return {}
  },
  // 注意： 组件中的 所有 props 中的数据，都是通过 父组件传递给子组件的
  // props 中的数据，都是只读的，无法重新赋值
  // 把父组件传递过来的 parent 属性，先在 props 数组中，定义一下，这样，才能使用这个数据
  props: {},
  //存放 方法
  methods: {},
  //存放 过滤器
  filters: {},
  //自定义 私有指令
  directives: {},
  //存放 子组件
  // template: '',
  /*  生命周期函数  */
  //创建期间
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  //运行期间
  beforeUpdate() {
  },
  updated() {
  },
  //销毁时期
  beforeDestroy() {
  },
  destroyed() {
  }

}
</script>

<style scoped>

</style>