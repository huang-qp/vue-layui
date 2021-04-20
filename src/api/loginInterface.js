import axios from '@/utils/config'
// data:{
// 	url:'',//请求路径
// 	enterReference:{}//请求接口入参
// }
export function login(data) {
	return axios({
		url: data.url,
		method: 'post'
	})
}