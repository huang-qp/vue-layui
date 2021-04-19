import Mock from 'mockjs' //引入mockjs

Mock.setup({
// timeout: 400  //延时400s请求到数据
	timeout: 200 - 400 //延时200-400s请求到数据
})