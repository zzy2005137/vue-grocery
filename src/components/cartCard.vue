<template>
  <div class="cart">
    <el-card class="box-card" :body-style="{ padding: '5px' }">
      <el-row justify="space-between">
        <el-col :span="8">
          <el-image
            style="width: 7rem; height: 7rem"
            :src="item.img"
            fit="cover"
        /></el-col>
        <el-col :span="16">
          <div class="right-box">
            <h3>{{ item.name }}</h3>
            <div class="btns">
              <el-button
                type="default"
                icon="el-icon-minus"
                circle
                size="small"
                @click="decreaseQuantity(item.id)"
              />
              <span>{{ item.quantity }}</span>
              <el-button
                type="primary"
                icon="el-icon-plus"
                circle
                size="small"
                @click="addQuantity(item.id)"
              />
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  props: ["item"],
  name: "CartCard",
  methods: {
    addQuantity(id) {
      this.$store.commit("cart/addQuantity", { id: id });
    },
    decreaseQuantity(id) {
      this.$store.commit("cart/decreaseQuantity", { id: id });
    },
  },
};
</script>

<style scoped>
.right-box {
  /* width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.btns {
  position: absolute;
  text-align: right;
  bottom: 1rem;
  right: 0;
}

.el-button {
  margin-left: 1rem;
  margin-right: 1rem;
}
h3 {
  text-align: left;
  padding-left: 0.8rem;
}
</style>
