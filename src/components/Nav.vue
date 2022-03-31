<template>
  <div class="nav">
    <ul>
      <li v-for="(c, key) in category" :key="key">
        {{ c }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    category: {
      type: Array,
      required: true,
    },
  },
};
</script>
