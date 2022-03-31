<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getItems">get items</button>
    <ul v-for="(item, key) in items" :key="key">
      {{
        item.name
      }}
    </ul>
  </div>
</template>

<script>
// import DemoFilter from "../components/DemoFilter.vue"
import ItemService from "@/service/itemService.js";

export default {
  name: "about",
  components: {},
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getItems() {
      ItemService.getItems().then((items) => {
        let container = [];
        items.forEach((item) => {
          container.push(item.toJSON());
        });
        this.items = container;
      });
    },
  },
};
</script>
