<template>
  <h1>添加新商品</h1>
  <AddForm />
</template>

<script>
import AddForm from "@/components/addForm.vue"
export default {
  name: "addItem",
  components: {
    AddForm,
  },
}
</script>

<style scoped>
h1 {
  margin-top: 1rem;
}
</style>
