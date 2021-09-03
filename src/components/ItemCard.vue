<template>
  <div class="card">
    <el-image
      style="width: 100%; height: initial"
      :src="getImgUrl"
      :fit="fit"
    ></el-image>
    <div class="info">
      <h3 class="name">{{ itemName }}</h3>
      <h3 class="price">{{ itemPrice }}</h3>
      <!-- <el-button
        class="add"
        type="primary"
        icon="el-icon-plus"
        size="small"
        circle
      >
      </el-button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemName", "itemPrice", "itemImgUrl"],
  name: "ItemCard",
  data() {
    return {
      // url: require(`@/img/item1.jpg`),
      fit: "cover",
    }
  },

  computed: {
    getImgUrl() {
      return require(`@/assets/img/${this.itemImgUrl}.jpg`)
    },
  },
}
</script>

<style scoped>
.card {
  text-align: left;
}
.name {
  margin-bottom: 0.2rem;
  font-size: 1rem;
}

.price {
  color: brown;
}

.price::before {
  content: "\00a5";
  font-size: 0.9rem;
  margin-right: 0.2rem;
}

.info {
  padding: 0.2rem 0.3rem;
  position: relative;
}
.add {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.3rem;
}
</style>
