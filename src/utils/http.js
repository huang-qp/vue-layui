/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import store from '../store/storeIndex'
import {Loading} from 'element-ui'
import {Message} from 'element-ui';
import Vue from 'vue'
// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://127.0.0.1:3000';
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '';
}

let loadingShow;

// 请求超时时间
axios.defaults.timeout = 10000;
// 在客户端axios请求中设置
axios.defaults.withCredentials = false
// 通过设置 withCredentials: true ，发送Ajax时，Request header中便会带上 Cookie 信息。
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = Vue.prototype.$cookie.get('X-TOKEN');
        debugger
        if(token&&config.url!=="/backstage/loginIndex/loginData"){
            config.headers['X-TOKEN'] = token
        }
        // token && (config.headers['X-TOKEN'] = token);
        // 遮罩层
        loadingShow = Loading.service({
            fullscreen: true,
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
        return config;

    },
    error => {
        loadingShow.close()
        return Promise.error(error);
    }
)
// 响应拦截器
axios.interceptors.response.use(
    response => {
        debugger
        if (response.status === 200) {
            loadingShow.close()
            return Promise.resolve(response);
        } else {
            loadingShow.close()
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        loadingShow.close()
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    this.$router.replace({
                        path: '/homePageIndex',
                        query: {redirect: this.$router.currentRoute.fullPath}
                    });
                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    // Toast({
                    // 	message: '登录过期，请重新登录',
                    // 	duration: 1000,
                    // 	forbidClick: true
                    // });
                    Message.error('登录过期，请重新登录');
                    // 清除token
                    this.$cookie.delete('X-TOKEN')
                    store.commit('login/loginStatusChange', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        this.$router.replace({
                            path: '/homePageIndex',
                            query: {
                                redirect: this.$router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                // 404请求不存在
                case 404:
                    // Toast({
                    // 	message: '网络请求不存在',
                    // 	duration: 1500,
                    // 	forbidClick: true
                    // });
                    Message.error('网络请求不存在');
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    // Toast({
                    // 	message: error.response.data.message,
                    // 	duration: 1500,
                    // 	forbidClick: true
                    // });
                    Message.error(error.response.data.message);
            }
            return Promise.reject(error.response);
        }
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        debugger
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
