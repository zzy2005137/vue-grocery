<template>
  <Header></Header>
  <div class="main">
    <router-view></router-view>
  </div>
  <Footer class="footer"></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.main {
  min-height: 90vh;
}
.footer {
  height: 10vh;
}
</style>
