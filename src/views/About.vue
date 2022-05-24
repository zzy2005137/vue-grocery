<template>
  <div class="about">
    <img src="@/assets/glogo.png" alt="" class="logo" />
    <h1>小永春杂货铺</h1>
    <p class="first">
      一家集各类商品为一体的<span class="highlight">神奇小店</span>
    </p>
    <img src="@/assets/img/qrcode.jpg" alt="" class="logo" />
    <!-- <p class="second">正宗农产品 / 养生中药 / 干货礼盒 / 零食小吃 / 地方特产</p> -->
  </div>
</template>

<script>
// import DemoFilter from "../components/DemoFilter.vue"

export default {
  name: "about",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.about {
  padding: 1rem;
}

h1 {
  margin-top: 1rem;
}

p {
  font-size: 1.3rem;
  padding: 0 1rem 0 1rem;
}

.first {
  margin-top: 1rem;
}

.logo {
  margin-top: 2rem;
  width: 100px;
  height: 100px;
}

.highlight {
  color: #1683ab;
  font-weight: bolder;
}
</style>
