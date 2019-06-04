/**
 * state parameter for APP
 */

const app = {
  state: {
    login: true, // login or not,
    userId: 0
  },
  mutations: {
    LOGIN: (state) => {
      state.login = true
    },
    LOGOUT: (state) => {
      state.login = false
    }
  },
  actions: {
    CHANGE_LOG_IN: ({ commit }) => {
      console.log('CHANGE_LOG_IN')
      commit('LOGIN')
    },
    CHANGE_LOG_OUT: ({ commit }) => {
      commit('LOGIN')
    }
  },
  getters: {
    isLogin (state) {
      return state.login
    },
    userId (state) {
      return state.userId
    }
  }
}

export default app
