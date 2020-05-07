import Cookie from "js-cookie";
export default {
  namespaced: true,
  state: {
    token: "",
    access: ""
  },
  mutations: {
    /**
     * 设置tooken
     * @param {*} state
     * @param {*} val
     */
    setToken(state, val) {
      state.token = val;
      Cookie.set("token", val);
    },
    clearToken(state) {
      state.token = "";
      Cookie.remove("token");
    },
    /**
     * 设置用户权限
     * @param {*} state
     */
    setAccess(state, val) {
      Cookie.set("access", val);
      state.access = val;
    },
    clearAccess(state) {
      state.access = "";
      Cookie.remove("access");
    },
    getAccess(state) {
      state.access = Cookie.get("access");
    },
    /**
     * 获取用户token 有返回true 没有返回 false
     * @param {*} state
     */
    getToken(state) {
      if (!Cookie.get("token")) {
        return false;
      }
      state.token = Cookie.get("token");
      return true;
    }
  },
  actions: {}
};
