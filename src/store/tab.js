import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    menuAll: [],
    menuCurrent: {}
  },
  mutations: {
    /**
     * 点击的菜单
     */
    selectMemu(state, val) {
      console.log(val);
      state.menuCurrent = val;
    }
  },
  actions: {}
});
