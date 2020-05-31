import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedUser: {
      username: null,
      logged: false
    }
  },
  mutations: {
    login (state, username) {
      state.loggedUser.username = username
      state.loggedUser.logged = true
    },
    logout (state) {
      state.loggedUser.username = null
      state.loggedUser.logged = false
    }
  },
  actions: {
  },
  modules: {
  }
})
