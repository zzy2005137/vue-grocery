import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",

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
    component: () =>
      import("../views/About.vue"),
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
