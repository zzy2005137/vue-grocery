<template>
  <div id="app">
    <div>
      <button type="button" @click="add">Add</button>
      <button type="button" @click="remove">Remove</button>
      <button type="button" @click="shuffle">Shuffle</button>
      <button type="button" @click="less5">less5</button>
    </div>
    <transition-group tag="ul" name="list" class="container">
      <div class="item" v-for="item in list" :key="item.id">
        Item {{ item.id }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "DemoFilter",
  components: {},
  data() {
    return {
      maxId: 3,
      list: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
  methods: {
    random(max) {
      return Math.floor(Math.random() * (max + 1));
    },
    add() {
      const id = ++this.maxId;
      const index = this.random(this.list.length);
      this.list.splice(index, 0, { id });
    },
    remove() {
      const index = this.random(this.list.length - 1);
      this.list.splice(index, 1);
    },
    shuffle() {
      const shuffled = [];
      while (this.list.length > 0) {
        const index = this.random(this.list.length - 1);
        shuffled.push(this.list[index]);
        this.list.splice(index, 1);
      }
      this.list = shuffled;
    },
    less5() {
      this.list = this.list.filter((item) => {
        return item.id < 5;
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

button {
  padding: 8px 30px;
  border-width: 0;
  background-color: #505050;
  color: #fff;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  transition: opacity 100ms ease-out;
}

button:hover {
  opacity: 0.7;
}

ul {
  position: relative;
  padding-top: 18px;
  width: 420px;
}

.item {
  display: block;
  margin-top: 8px;
  padding: 8px 12px;
  width: 100%;
  background-color: #e5e5e5;
}

/* transition animation */

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
</style>
