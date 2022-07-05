import { createStore } from "vuex";
import itemService from "@/service/itemService.js";

export default createStore({
  state: {
    isAdmin: false,
    itemList: [],
  },
  mutations: {
    setIsAdmin(state, login) {
      state.isAdmin = login ? true : false;
    },
    setItemList(state, payload) {
      state.itemList = payload.items;
    },
  },
  actions: {
    getItems({ commit }) {
      return itemService.getItems().then((items) => {
        commit("setItemList", { items });
      });
    },
  },
  getters: {
    activeItems(state) {
      return (keyword) => {
        if (keyword === "") {
          //搜索关键词为空，返回所有数据
          return state.itemList;
        } else {
          //返回包含关键词的数据
          return state.itemList.filter((item) => item.name.includes(keyword));
        }
      };
    },
  },
  modules: {},
});
