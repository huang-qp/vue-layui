// import axios from "axios";
// import '../mock/mockIndex'
import {post} from '@/utils/http'

/**
 * 请求获取侧边导航数据
 * @param {Object} data [请求接口入参]
 */
export function getSideNavigationData(data) {
    return post(data.url, data.data)
}