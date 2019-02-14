import FireBaseService from '../../services/auth';

const auth = {
  state: {
    status: '',
    token: '',
    user: {},
  },

  getters: {},

  mutations: {
    mutateUserData: (state, payload) => {
      state.status = payload.status
      state.user = payload.decoded_token
    }
  },

  actions: {
    createNewUser: async ({ dispatch }, payload) => {
      try {
        const response = await FireBaseService.register(payload);
        dispatch('mutationUserData', response);
        console.log('Action called');
      } catch (error) {
        // TODO set up error store
        // console.log('Error -->', error);
        this.$store.commit('ERROR', error)
      }
    },
  },
};

export default auth;
