<template>
  <div class="header">
    <el-row justify="space-between" class="nav-bar">
      <el-col :span="8" class="logo-container" @click="gotoHomePage">
        <img src="@/assets/glogo.png" alt="" class="logo" /> GroceryStore
      </el-col>
      <el-col :span="4">
        <a v-if="$store.state.isAdmin" @click="logOut">注销</a>
        <router-link to="/landing" v-else> 登录 </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import userService from "../service/userService.js";
export default {
  name: "Header",
  data() {
    return {};
  },

  methods: {
    gotoHomePage() {
      this.$router.push({
        name: "Index",
      });
    },
    logOut() {
      userService.logOut();
      this.$store.commit("setIsAdmin", false);
    },
    isAdmin() {
      return userService.isAdmin();
    },
  },
  updated() {
    console.log("hello");
  },
  computed: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(60, 60, 60, 0.7);
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  text-decoration: none;
  padding: 0.8em;
}
.logo {
  width: 35px;
  margin-right: 10px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-bar {
  border-bottom: 2px #dcdfe6 solid;
  padding: 0.3rem;
}

.nav-bar a {
  font-size: 1rem;
  display: block;
  /* padding-top: 0.5rem; */
  padding: 0.5rem;
}
.el-col {
  margin: 0.5rem;
}
</style>
