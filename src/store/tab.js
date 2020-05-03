export default {
  namespaced: true,
  state: {
    menuAll: [],
    isCollapse: false,
    menuCurrent: {},
    tagsArr: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "s-home"
      }
    ]
  },
  mutations: {
    /**
     * 点击的菜单
     */
    selectMemuAndAddTag(state, val) {
      const flag = state.tagsArr.some(ele => ele.label === val.label);
      if (!flag) {
        state.tagsArr.push(val);
      }
      state.menuCurrent = val;
    },
    /**
     * 点击删除tag标签
     */
    deleteTag(state, val) {
      state.tagsArr = state.tagsArr.filter(ele => ele !== val);
    },
    /**
     * 切换菜单收缩
     */
    isCollapseChange(state) {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {}
};
