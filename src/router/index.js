import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/",
    name: "Index",
    component: () =>
      import("../views/index/index.vue"),
    children: [
      {
        path: "/user",
        name: "User",
        component: () =>
          import("../views/user/index.vue"),
      },
      {
        path: "/safe",
        name: "Safe",
        component: () =>
          import("../views/safe/index.vue"),
      },
      {
        path: "/password",
        name: "Password",
        component: () =>
          import("../views/safe/password.vue"),
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
