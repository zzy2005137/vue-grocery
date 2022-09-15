<template>
  <div class="success">
    <img src="@/assets/glogo.png" alt="" class="logo" />
    <h2 class="message">下单成功</h2>
    <el-table :data="cartItems" style="width: 80%" class="table">
      <el-table-column prop="name" label="商品名称" />
      <el-table-column prop="quantity" label="数量" width="50" />
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", {
      cartItems: "itemArr",
    }),
  },
};
</script>

<style scoped>
.logo {
  margin-top: 2rem;
  height: 100px;
  width: 100px;
}
.message {
  padding: 1rem;
}

.table {
  margin: 0 auto;
}
</style>
