<template>
  <div class="nav">
    <el-menu
      :default-active="全部"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">特产</el-menu-item>
      <el-menu-item index="3">干货</el-menu-item>
      <el-menu-item index="4">其他</el-menu-item>
      <el-menu-item>
        <router-link to="/landing"> 登录 </router-link></el-menu-item
      ><el-menu-item @click="logout" v-if="isAdmin"> 注销 </el-menu-item>
      <el-menu-item v-if="isAdmin"
        ><router-link to="/add"> 添加商品 </router-link></el-menu-item
      >

      <!-- <el-menu-item
        v-for="(category, index) in categories"
        :key="index"
        :index="category.index"
        >{{ category.name }}</el-menu-item
      > -->
    </el-menu>

    <div class="line"></div>
  </div>
</template>

<script>
import router from "../router"
import AV from "leancloud-storage"
import { ElMessage } from "element-plus"
export default {
  data() {
    return {
      // categories: ["全部", "干货", "特产", "酒类", "其他", "登陆"],
      categories: [
        { name: "Home", indexPath: "/home", index: "1" },
        { name: "Subscribe", indexPath: "/subscribe", index: "2" },
        { name: "About", indexPath: "/about", index: "3" },
        { name: "More", indexPath: "/more", index: "4" },
      ],
    }
  },
  methods: {
    goAdd() {
      router.push("/add")
    },
    logout() {
      AV.User.logOut().then(
        ElMessage({
          showClose: true,
          type: "success",
          message: "退出成功",
        })
      )

      router.go(0)
    },
  },
  created() {},
  computed: {
    isAdmin() {
      const currentUser = AV.User.current()
      if (currentUser && currentUser.getUsername() === "linbili") {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #909399;
}
</style>
