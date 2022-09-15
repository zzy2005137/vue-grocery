import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/items",
    name: "Items",
    component: () => import("@/views/Items.vue"),
    props: true,
  },
  // {
  //   path: "/index",
  //   name: "Index",
  //   component: () => import("@/views/Index.vue"),
  // },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
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
    meta: {
      requireLogin: true,
    },
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
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart"),
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("@/views/Success"),
  },
];

const router = createRouter({
  history: createWebHistory("/grocery"),
  routes,
});

//添加路由守卫，进行权限控制
router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin && !store.state.isAdmin) {
    next({ name: "Landing" });
  } else {
    next();
  }
});

export default router;
