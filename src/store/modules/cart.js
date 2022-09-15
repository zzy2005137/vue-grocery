const items = new Map();

export default {
  namespaced: true,
  state: () => ({
    items: items,
  }),
  mutations: {
    addQuantity(state, payload) {
      const { id } = payload;
      let target = state.items.get(id);
      if (target) {
        target.quantity++;
      }
    },
    decreaseQuantity(state, payload) {
      const { id } = payload;
      let target = state.items.get(id);
      target.quantity--;
      if (target.quantity === 0) {
        state.items.delete(id);
      }
    },
    addItem(state, payload) {
      let item = state.items.get(payload.id);
      if (!item) {
        state.items.set(payload.id, payload.target);
      } else {
        item.quantity++;
      }
    },
    clear(state) {
      state.items = new Map();
    },
  },
  actions: {},
  getters: {
    itemArr(state) {
      let arr = [];
      for (let [key, value] of state.items) {
        value.id = key;
        arr.push(value);
      }
      //   return Array.from(state.items.values());
      return arr;
    },
  },
  modules: {},
};
