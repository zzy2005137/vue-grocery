<template>
  <div class="nav">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
      <el-tab-pane
        v-for="(category, index) in categories"
        :key="index"
        :label="category"
        :name="category"
      ></el-tab-pane>
      <el-tab-pane label="全部" name="quadskfj"></el-tab-pane>
      <el-tab-pane label="全部" name="quadskfj"></el-tab-pane>
    </el-tabs>
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="$emit('changeOption', 1)"
        >全部</el-menu-item
      >
      <el-menu-item
        v-for="(category, index) in categories"
        :key="index"
        :index="index"
        @click="$emit('changeOption', category)"
        >{{ category }}</el-menu-item
      >

      <el-menu-item>
        <router-link to="/landing"> 登录 </router-link></el-menu-item
      >
      <el-menu-item>
        <router-link to="/about"> 关于 </router-link></el-menu-item
      >
      <el-menu-item> <router-link to="/back"> 后台 </router-link></el-menu-item>
    </el-menu> -->
    <div class="line"></div>
  </div>
</template>

<script>
import firebaseApp from "../components/firebaseInit"
export default {
  data() {
    return {
      categories: [],
    }
  },

  created() {
    var db = firebaseApp.firestore()
    db.collection("category")
      .doc("list")
      .get()
      .then((res) => {
        this.categories = res.data().categories
      })
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #909399;
}
</style>
