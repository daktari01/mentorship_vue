/**
 * Created by adebayooluwadamilola on 2/4/19.
 */
const user = {
  state: {
    user: {},
    isLoggedIn: false,
  },

  getters: {
    getUserData: state => state.user,
    getUserStatus: state => state.isLoggedIn,
  },

  mutations: {
    mutateUserData: (state, payload) => {
      state.user = payload;
    },
  },

  actions: {
    actionUserData: ({ commit }, payload) => {
      commit('mutateUserData', payload);
    },
  },
};

export default user;
