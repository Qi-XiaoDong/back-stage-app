import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/less/reset.less";
import "./plugins/element.js";
import "./mock";
Vue.config.productionTip = false;

/**
 * 为了解决路由列表重复点击
 */
const originPush = router.push;
router.push = function(location) {
  return originPush.call(this, location).catch(err => err);
};

router.beforeEach((to, from, next) => {
  // // 防止刷新后vuex里丢失token
  store.commit("user/getToken");
  store.commit("user/getAccess");
  // // 防止刷新后vuex里丢失标签列表tagList
  store.commit("tab/getTagList");
  let token = store.state.user.token;
  // 过滤登录页，防止死循环
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else if (token && to.name === "login") {
    next({ name: "home" });
  } else {
    next();
  }
});

/**
 * 加载程序时立即执行注入路由信息方法
 */
new Vue({
  router,
  store,
  created() {
    store.commit("tab/addMenu", router);
  },
  render: h => h(App)
}).$mount("#app");
