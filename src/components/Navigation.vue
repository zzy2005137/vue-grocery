<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(category, index) in categories"
        :key="index"
        :index="index"
        @click="$emit('changeOption', category)"
        >{{ category }}</el-menu-item
      >
      <el-menu-item @click="goAdd">添加商品</el-menu-item>

      <!-- <el-menu-item>
        <router-link to="/landing"> 登录 </router-link></el-menu-item
      >
      <el-menu-item>
        <router-link to="/about"> 关于 </router-link></el-menu-item
      >
      <el-menu-item> <router-link to="/back"> 后台 </router-link></el-menu-item> -->
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
import router from "../router"
export default {
  data() {
    return {
      categories: ["全部", "干货", "特产", "酒类"],
    }
  },
  methods: {
    goAdd() {
      router.push("/add")
    },
  },
  created() {},
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #909399;
}
</style>
