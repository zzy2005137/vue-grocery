<template>
  <div class="container">
    <el-row justify="space-between" class="nav-bar">
      <el-col span="6" class="logo-container">
        <img src="@/assets/logo.png" alt="" class="logo" /> GroceryStore
      </el-col>
      <el-col span="6"><router-link to="/landing"> 登录 </router-link> </el-col>
    </el-row>

    <ShopLogo></ShopLogo>

    <el-row justify="center">
      <el-col :span="10">
        <el-card> 👏全部商品 </el-card>
      </el-col>
      <el-col :span="10">
        <el-card> 🍖地方特产 </el-card>
      </el-col>
      <el-col :span="10">
        <el-card> 🥮干货 </el-card>
      </el-col>
      <el-col :span="10">
        <el-card> 🍥其他 </el-card>
      </el-col>
    </el-row>
    <el-button type="primary" class="shop-btn">SHOP NOW</el-button>
    <el-divider />
    <div class="footer">
      <router-link to="#">首页</router-link> |
      <router-link to="#">全部商品</router-link> |
      <router-link to="#"> 关于</router-link>
      <p>杂货铺版权所有 © 2021-2022 zzy2005137</p>
    </div>
  </div>
</template>

<script>
import ShopLogo from "@/components/ShopLogo.vue";
export default {
  name: "Index",
  components: {
    ShopLogo,
  },
};
</script>

<style scoped>
.el-menu-item {
  font-size: 2rem;
}
.el-menu-demo {
  text-align: right;
}
.btn-blue {
  border: none;
  padding: 0.8em;
  background-color: #409eff;
  color: white;
  font: bolder;
  border-radius: 3px;
}
.btn-blue:focus {
  background-color: #c6e2ff;
}
.el-col {
  margin: 0.5rem;
}

.footer {
  color: rgba(60, 60, 60, 0.7);
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  position: relative;
  bottom: 0;
}
a {
  text-decoration: none;
  color: rgba(60, 60, 60, 0.7);
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  text-decoration: none;
  padding: 0.8em;
}

.shop-btn {
  margin-top: 1rem;
}

.logo {
  width: 25px;
  margin-right: 10px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  border-bottom: 2px #dcdfe6 solid;
  padding: 0.3rem;
}

.nav-bar a {
  font-size: 1rem;
}
</style>
