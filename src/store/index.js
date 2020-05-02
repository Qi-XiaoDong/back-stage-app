import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    tab
  }
});
