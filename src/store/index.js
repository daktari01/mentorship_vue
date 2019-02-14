import Vue from 'vue'
import Vuex from 'vuex'

// Import Module
import User from './modules/user'
import auth from './modules/auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    User,
    auth
  }
})

export default store;
