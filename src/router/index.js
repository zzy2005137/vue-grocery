import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    redirect: { name: "Index" },
  },
  {
    path: "/items",
    name: "Items",
    component: () => import("@/views/Items.vue"),
    props: true,
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/views/Index.vue"),
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
    path: "/detail/:id?",
    name: "Detail",
    component: () => import("@/views/Detail.vue"),
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("@/views/Landing.vue"),
  },

  {
    path: "/add",
    name: "Add",
    component: () => import("@/views/AddItem.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test.vue"),
  },
  {
    path: "/update",
    name: "Update",
    component: () => import("@/components/updateForm.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
