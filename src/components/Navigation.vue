<template>
  <div class="nav">
    <el-menu
      :default-active="categories[0]"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(category, key) in categories"
        :key="key"
        @click="$emit('changeOption', category)"
        >{{ category }}</el-menu-item
      >
      <el-menu-item v-show="!isAdmin">
        <router-link to="/landing"> 登录 </router-link></el-menu-item
      ><el-menu-item @click="logout" v-show="isAdmin"> 注销 </el-menu-item>
      <el-menu-item v-show="isAdmin"
        ><router-link to="/add"> 添加商品 </router-link></el-menu-item
      >
    </el-menu>

    <div class="line"></div>
  </div>
</template>

<script>
import router from "../router";
import userService from "../service/userService.js";
export default {
  data() {
    return {
      categories: ["全部", "特产", "干货", "其他"],
    };
  },

  methods: {
    goAdd() {
      router.push("/add");
    },
    logout() {
      userService.logOut();
      router.go(0);
    },
  },

  computed: {
    isAdmin() {
      return userService.isAdmin();
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #909399;
}
</style>
