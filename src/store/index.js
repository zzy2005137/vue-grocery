import { createStore } from "vuex";

export default createStore({
  state: {
    isAdmin: false,
  },
  mutations: {
    setIsAdmin(state, login) {
      state.isAdmin = login ? true : false;
    },
  },
  actions: {},
  modules: {},
});
