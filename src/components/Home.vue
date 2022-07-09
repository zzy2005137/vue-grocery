<template>
  <div class="home">
    <ShopLogo></ShopLogo>
    <h1>Welcome</h1>
    <h1>Grocery Store</h1>

    <el-row justify="center" class="category">
      <el-col :span="10">
        <el-card @click="gotoItemsPage(1)" class="pointer">
          👏全部商品
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card @click="gotoItemsPage(2)" class="pointer">
          🍖地方特产
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card @click="gotoItemsPage(3)" class="pointer"> 🥮干货 </el-card>
      </el-col>
      <el-col :span="10">
        <el-card @click="gotoItemsPage(4)" class="pointer"> 🍥其他 </el-card>
      </el-col>
    </el-row>
    <el-button type="primary" class="shop-btn" @click="gotoItemsPage(1)"
      >SHOP NOW</el-button
    ><el-button
      v-show="$store.state.isAdmin"
      type="success"
      class="shop-btn"
      @click="$router.push('/add')"
      >ADD ITEM</el-button
    >
  </div>
</template>

<script>
import ShopLogo from "@/components/ShopLogo.vue";
import userService from "../service/userService";

export default {
  name: "Home",
  components: {
    ShopLogo,
  },
  methods: {
    gotoItemsPage(id) {
      this.$router.push({
        name: "Items",
        params: { id: id },
      });
    },
    isAdmin() {
      return userService.isAdmin();
    },
  },
};
</script>

<style scoped>
.home {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  height: 100vh;
}

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

.category {
  margin-top: 2rem;
}

.pointer {
  cursor: pointer;
}
</style>
