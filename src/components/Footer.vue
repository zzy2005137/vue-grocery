<template>
  <div class="footer">
    <router-link to="/">首页</router-link> |
    <router-link to="/items">全部商品</router-link> |
    <router-link to="/about"> 关于</router-link>
    <p>杂货铺版权所有 © 2021-2022 zzy2005137</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  color: rgba(60, 60, 60, 0.7);
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  /* margin-top: 1.5rem; */
  padding: 1rem;
  border-top: 2px #dcdfe6 solid;
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
</style>
