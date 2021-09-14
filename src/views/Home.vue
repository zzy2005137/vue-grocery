<template>
  <el-container>
    <el-header>
      <Navigation @changeOption="changeOption" />
    </el-header>
    <el-main>
      <ItemList :option="option" />
    </el-main>
    <el-footer>
      <hr />
      <!-- <el-button @click="checkCurrentUser">check user</el-button> -->
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src

import Navigation from "../components/Navigation.vue"
import ItemList from "../components/ItemList.vue"
import AV from "leancloud-storage"

export default {
  name: "Home",
  components: {
    Navigation,
    ItemList,
  },
  data() {
    return {
      option: 1,
    }
  },

  methods: {
    changeOption(currentOption) {
      console.log("change option")
    },
    checkCurrentUser() {
      console.log(AV.User.current().getUsername())
    },
  },
}
</script>

<style scope>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
