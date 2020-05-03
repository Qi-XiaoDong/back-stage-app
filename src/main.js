import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/less/reset.less";
import "./plugins/element.js";
import "./mock";
Vue.config.productionTip = false;

const originPush = router.push;
router.push = function(location) {
  return originPush.call(this, location).catch(err => err);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
