import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Landing from "../views/Landing.vue";
import add from "../views/AddItem.vue";
import test from "../views/Test.vue";
import update from "../components/updateForm.vue";
import Index from "../views/Index.vue";
import Items from "../views/Items.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "Index" },
  },
  {
    path: "/items",
    name: "Items",
    component: Items,
    props: true,
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
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
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
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
  {
    path: "/update",
    name: "Update",
    component: update,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
