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
      <h4>加微信了解详情</h4>
      <img class="contact" src="../assets/img/qrcode.jpg" alt="xxx" />
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
    changeOption() {
      console.log("current Option")
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
h4 {
  margin-top: 1rem;
}
.contact {
  width: 10rem;
}
</style>
