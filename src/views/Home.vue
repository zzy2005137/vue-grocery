<template>
  <div class="home">
    <h1>grocery store</h1>
    <el-button size="small">默认按钮</el-button>
    <el-button size="small">默认按钮</el-button>
    <el-button size="small">默认按钮</el-button>
    <filters></filters>
  </div>
</template>

<script>
// @ is an alias to /src

import Filters from "../components/Filters.vue"

export default {
  name: "Home",
  components: {
    Filters,
  },
}
</script>

<style scoped></style>
