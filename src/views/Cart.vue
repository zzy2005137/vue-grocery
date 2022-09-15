<template>
  <div class="cart">
    <h2 v-if="cartItems.length === 0" class="prompt">购物车空空如也</h2>
    <CartCard
      v-for="(item, key) of cartItems"
      :key="key"
      :item="item"
    ></CartCard>

    <div class="total">
      <p>共 {{ cartItems.length }} 件商品</p>
      <el-button @click="makeOrder">去下单</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import CartCard from "../components/cartCard.vue";
export default {
  name: "Cart",

  computed: {
    // ...mapState({
    //   cartItems: (state) => state.cart.items,
    // }),
    ...mapGetters("cart", {
      cartItems: "itemArr",
    }),
  },
  methods: {
    addQuantity(id) {
      this.$store.commit("cart/addQuantity", { id: id });
    },
    decreaseQuantity(id) {
      this.$store.commit("cart/decreaseQuantity", { id: id });
    },

    makeOrder() {
      if (this.cartItems.length === 0) {
        this.$message({
          type: "warning",
          message: "购物车为空",
        });
      } else {
        // this.$store.commit("cart/clear", null);
        this.$router.push("/success");
      }
    },
  },
  components: { CartCard },
};
</script>

<style scoped>
.cart {
  height: 100%;
}
.right-box {
  /* width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.btns {
  text-align: right;
  margin-top: 1.5rem;
}

.el-button {
  margin-left: 1rem;
  margin-right: 1rem;
}

.prompt {
  padding: 1rem;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  bottom: 0;
  background-color: aliceblue;
}
</style>
