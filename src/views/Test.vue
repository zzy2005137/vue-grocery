<template>
  <div class="test">
    <h1>hello</h1>
    <button @click="check">check</button>
  </div>
</template>

<script>

export default {
  name: "test",
  data() {
    return {
      itemList: [],
    };
  },
  created() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      this.$store.dispatch("getItems").then(() => {
        this.itemList = this.$store.getters.activeItems("");
      });
    },
    check() {
      console.log(this.itemList);
    },
  },
  computed: {},
};
</script>

<style scoped></style>
