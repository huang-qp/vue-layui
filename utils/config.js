import axios from 'axios'

// 给所有axios请求设置基础的域名
// axios.defaults.baseURL = 'http://localhost:3000'


//用axios.create可以创建axios的实例，允许不同实例有不同配置
const axios = axios.create({
	baseURL: 'http://localhost:8080',
	// 请求超时的时间
	timeout: 5000
});
// const axios2 = axios.create({
//     baseURL: 'http://www.test.com',
//     timeout: 5000
// });
export default axios