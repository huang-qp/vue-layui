import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import login from './modules/login';
import breadcrumbNavigation from  './modules/breadcrumbNavigation'

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        breadcrumbNavigation
    }
})
