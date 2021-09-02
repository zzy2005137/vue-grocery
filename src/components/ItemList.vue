<template>
  <div id="item-list">
    <router-link to="/detail">
      <transition-group tag="ul" name="list" class="container">
        <el-card
          v-for="item in filterItems"
          :key="item.id"
          shadow="never"
          class="item"
          :body-style="{ padding: 0 }"
        >
          <ItemCard
            :itemName="item.name"
            :itemPrice="item.price"
            :itemImgUrl="item.imgUrl"
          />
        </el-card> </transition-group
    ></router-link>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue"
export default {
  props: ["option"],
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "干货",
          index: 2,
          price: 23.6,
          imgUrl: "@/img/item1.jpg",
        },
        {
          id: 2,
          name: "干货",
          index: 2,
          price: 50.6,
          imgUrl: "@/img/item1.jpg",
        },
        {
          id: 3,
          name: "干货",
          index: 2,
          price: 17.6,
          imgUrl: "@/img/item1.jpg",
        },
        {
          id: 4,
          name: "粮油",
          index: 3,
          price: 66.9,
          imgUrl: "@/img/item1.jpg",
        },
        {
          id: 5,
          name: "粮油",
          index: 3,
          price: 12.6,
          imgUrl: "@/img/item1.jpg",
        },
        {
          id: 6,
          name: "其他",
          index: 4,
          price: 25.3,
          imgUrl: "@/img/item1.jpg",
        },
      ],
      fakeOption: 1,
    }
  },
  methods: {},

  computed: {
    filterItems() {
      if (this.option === 1) {
        return this.items
      } else {
        return this.items.filter((item) => {
          return item.index === this.option
        })
      }
    },
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
}

.el-card {
  min-height: 10rem;
}

/* transition animation */

.list-enter {
  transform: scale(0.5) translatex(-80px);
  opacity: 0;
}

.list-leave-to {
  transform: translatex(30px);
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  z-index: -1;
}

a {
  text-decoration: none;
}
</style>
