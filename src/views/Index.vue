<template>
  <div class="container">
    <keep-alive>
      <Home></Home>
    </keep-alive>
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";
import Home from "@/components/Home.vue";
export default {
  name: "Index",
  components: {
    // Header,
    // Footer,
    Home,
  },
};
</script>

<style scoped></style>
