<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="$emit('changeOption', 1)"
        >全部</el-menu-item
      >
      <el-menu-item index="2" @click="$emit('changeOption', 2)"
        >干货</el-menu-item
      >
      <el-menu-item index="3" @click="$emit('changeOption', 3)"
        >粮油</el-menu-item
      >
      <el-menu-item index="4" @click="$emit('changeOption', 4)"
        >其他</el-menu-item
      >
      <el-menu-item index="5">
        <router-link to="/landing"> 登录 </router-link></el-menu-item
      >
      <el-menu-item index="6">
        <router-link to="/about"> 关于 </router-link></el-menu-item
      >
      <el-menu-item index="7">
        <router-link to="/back"> 后台 </router-link></el-menu-item
      >
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #909399;
}
</style>
