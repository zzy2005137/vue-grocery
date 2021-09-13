<template>
  <div class="card">
    <div class="img-wrapper">
      <img :src="item.img[0].url" alt="xxx" />
    </div>
    <div class="info">
      <h3>{{ item.name }}</h3>
      <h4>{{ item.description }}</h4>
      <p>{{ item.category }}</p>
    </div>
    <el-button class="btn" @click="$emit('deleteObj')" type="danger" plain
      >删除</el-button
    >
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
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.img-wrapper img {
  width: 100%;
}

.info {
  padding: 0 0.5rem;
}
.info h4 {
  font-size: 1rem;
  margin: 0.3rem 0;
  color: #a1a1a1;
  font-weight: 500;
}
.info p {
  font-size: 0.9rem;
}

.btn {
  margin: 0.5rem 0;
}
</style>
