<template>
  <div class="card">
    <div class="img-wrapper">
      <img :src="item.img[0].url" alt="xxx" />
    </div>
    <div class="info">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <p>{{ item.category }}</p>
    </div>
    <el-button @click="$emit('deleteObj')">删除</el-button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "ItemCard",
  data() {
    return {}
  },

  computed: {
    // getImgUrl() {
    //   return require(`@/assets/img/${this.item.imgUrl}.jpg`)
    // },
  },

  methods: {},
}
</script>

<style scoped>
.card {
  text-align: left;
}
.img-wrapper {
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.img-wrapper img {
  width: 100%;
}
</style>
