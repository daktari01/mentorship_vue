import FireBaseService from '../../services/auth';

const user = {
  state: {},

  getters: {},

  mutations: {},

  actions: {
    createNewUser: async ({ dispatch }, payload) => {
      try {
        const response = await FireBaseService.register(payload);
        dispatch('actionUserData', response);
      } catch (error) {
        // TODO set up error store
      }
    },
  },
};

export default user;
