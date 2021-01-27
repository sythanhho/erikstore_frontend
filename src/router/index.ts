import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const Foo = Vue.component("Foo", { template: "<div>foo</div>" });
const Bar = Vue.component("Bar", { template: "<div>bar</div>" });

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/overall",
        name: "Tongquan",
        components: {
          bodyview: Foo
        }
      },
      {
        path: "/goods",
        name: "Hang hoa",
        components: {
          bodyview: Bar
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
