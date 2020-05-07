import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from "@/views/Layout.vue";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "layout",
  //   component: Layout,
  //   redirect: "/home",
  //   children: [
  //     {
  //       path: "home",
  //       name: "home",
  //       component: () => import("@/views/MineHome.vue")
  //     },
  //     {
  //       path: "video",
  //       name: "video",
  //       component: () => import("@/views/MineVideo.vue")
  //     },
  //     {
  //       path: "user",
  //       name: "user",
  //       component: () => import("@/views/MineUser.vue")
  //     },
  //     {
  //       path: "page1",
  //       name: "page1",
  //       component: () => import("@/views/MineOtherPageOne.vue")
  //     },
  //     {
  //       path: "page2",
  //       name: "page2",
  //       component: () => import("@/views/MineOtherPageTwo.vue")
  //     },
  //     {
  //       path: "/login",
  //       name: "login",
  //       component: () => import("@/views/MineLogin.vue")
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  routes
});

export default router;
