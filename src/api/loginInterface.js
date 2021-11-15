// import { post } from '@/utils/http'
// import '../mock/mockIndex'
// import {get} from '@/utils/http'
import {post} from '@/utils/http'
// data:{
// 	url:'',//请求路径
// 	enterReference:{}//请求接口入参
// }
// export function login(enterReference) {
// 	return post(enterReference.url,{
// 		key:'00d91e8e0cca2b76f515926a36db68f5',
// 		// data:enterReference.data
// 		phone:enterReference.account,
// 		passwd:enterReference.password
// 	})
// }
// 登陆
export function login(data) {
    return post(data.url,data.data)
}