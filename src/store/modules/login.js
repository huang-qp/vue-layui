export default {
    namespaced: true,
    state: {
        login: [],
        test01: 'test01',
        loginSuccess: false
    },
    getters: {},
    mutations: {
        loginStatusChange(state, {
            loginSuccess
        }) {
            state.loginSuccess = loginSuccess;
        },
    },
    actions: {},
}
