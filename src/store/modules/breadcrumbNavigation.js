
export default {
    namespaced: true,
    state: {
        breadcrumbNavigationList: [{route: '/homePageIndex', menuName: '首页', parentName: ''}],
    },
    getters: {},
    mutations: {
        processingNavigationData(state, data) {
            if (data.menuName !== '首页') {
                if (state.breadcrumbNavigationList.length <= 1) {
                    state.breadcrumbNavigationList.push(data)
                } else if (state.breadcrumbNavigationList.length === 2) {
                    state.breadcrumbNavigationList.splice(1, 1, data)
                }

            } else {
                state.breadcrumbNavigationList.splice(1, 1)
            }
            // 存入缓存为解决刷新问题
            sessionStorage.setItem("breadcrumbNavigationList",JSON.stringify(state.breadcrumbNavigationList))
        }
    },
    actions: {
        transferProcessingNavigationData({commit}, data) {
            commit('processingNavigationData', data)
        }
    },
}