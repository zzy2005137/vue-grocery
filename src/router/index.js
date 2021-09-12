import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Detail from "../views/Detail.vue"
import Landing from "../views/Landing.vue"
import back from "../views/Back.vue"
import add from "../views/AddItem.vue"
import test from "../views/Test.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/back",
    name: "Back",
    component: back,
  },
  {
    path: "/add",
    name: "Add",
    component: add,
  },
  {
    path: "/test",
    name: "Test",
    component: test,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
