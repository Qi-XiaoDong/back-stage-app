import Cookie from "js-cookie";
export default {
  namespaced: true,
  state: {
    isCollapse: false, // 左侧菜单是否收缩
    menuAll: [], // 所有的路由信息
    // 默认当前展示首页的路由
    menuCurrent: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "s-home"
      }
    ],
    // 标签路由
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
     * 点击的菜单设置当前路由信息
     * 并且在cookie中设置tagList展开标签的信息
     */
    selectMemuAndAddTag(state, val) {
      const flag = state.tagsArr.some(ele => ele.label === val.label);
      if (!flag) {
        state.tagsArr.push(val);
        Cookie.set("tagList", JSON.stringify(state.tagsArr));
      }
      state.menuCurrent = val;
    },
    /**
     * 点击删除tag标签
     * 并且在cookie中重新设置tagList展开标签的信息
     */
    deleteTag(state, val) {
      state.tagsArr = state.tagsArr.filter(ele => ele !== val);
      Cookie.set("tagList", JSON.stringify(state.tagsArr));
    },
    /**
     * 退出登录清空tagArr
     * @param {*} state
     */
    clearTag(state) {
      state.tagsArr = [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home"
        }
      ];
      Cookie.remove("tagList");
    },
    /**
     * 切换菜单收缩
     */
    isCollapseChange(state) {
      state.isCollapse = !state.isCollapse;
    },
    /**
     * 设置所有菜单(并且添加在cookie中)
     * 在登录时执行
     */
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    /**
     * 清除所有菜单(并且在cookie删除)
     * 在退出登录时执行
     */
    clearMenu(state) {
      state.menuAll = [];
      Cookie.remove("menu");
    },
    /**
     * 获取在cookie中设置tagList展开标签的信息
     */
    getTagList(state) {
      if (Cookie.get("tagList")) {
        let tagsArr = JSON.parse(Cookie.get("tagList"));
        state.tagsArr = tagsArr;
      }
    },
    /**
     *从cookie中读取路由添加在 menuAll中
     *注入路由表
     */
    addMenu(state, router) {
      let menu = [];
      if (Cookie.get("menu")) {
        menu = JSON.parse(Cookie.get("menu"));
      }
      console.log(menu);
      state.menuAll = menu;
      // 拼接完整的路由列表
      let addRoutesInfo = [
        {
          path: "/",
          name: "layout",
          redirect: "/home",
          component: () => import(`@/views/Layout.vue`),
          children: [
            {
              path: "login",
              name: "login",
              component: () => import(`@/views/MineLogin.vue`)
            }
          ]
        }
      ];
      menu.forEach(item => {
        console.log(item);
        // 有子路由
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}.vue`);
            console.log(`@/views/${item.url}.vue`);
            return item;
          });
          addRoutesInfo[0].children.push(...item.children);
        } else {
          item.component = () => import(`@/views/${item.url}.vue`);
          console.log(`@/views/${item.url}.vue`);
          addRoutesInfo[0].children.push(item);
        }
      });
      console.log(addRoutesInfo);
      // 动态添加路由
      router.addRoutes(addRoutesInfo);
    }
  },
  actions: {}
};
