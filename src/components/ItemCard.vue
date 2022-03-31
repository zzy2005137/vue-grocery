<template>
  <div class="card">
    <div class="img-wrapper">
      <!-- <img :src="item.img[0].url" alt="xxx" /> -->
      <el-image
        style="width: 100%; height: initial"
        :src="item.img[0].url"
        :preview-src-list="srcList"
      >
      </el-image>
    </div>
    <div class="info">
      <h3>{{ item.name }}</h3>
      <el-collapse class="collapse">
        <el-collapse-item title="商品简介">
          <h4>{{ item.description }}</h4>
        </el-collapse-item>
      </el-collapse>

      <!-- <p>{{ item.category }}</p> -->
    </div>
    <el-button
      v-if="isAdmin"
      class="btn"
      @click="$emit('deleteObj')"
      type="danger"
      plain
      >删除</el-button
    >
    <el-button
      v-if="isAdmin"
      class="btn"
      @click="$emit('updateObj')"
      type="success"
      plain
      >修改</el-button
    >
  </div>
</template>

<script>
import AV from "leancloud-storage";
export default {
  props: ["item"],
  name: "ItemCard",
  data() {
    return {
      srcList: [this.item.img[0].url],
    };
  },

  computed: {
    isAdmin() {
      const currentUser = AV.User.current();
      if (currentUser && currentUser.getUsername() === "linbili") {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {},
};
</script>

<style scoped>
.card {
  text-align: left;
}
.img-wrapper {
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.img-wrapper img {
  width: 100%;
}

.info {
  padding: 0 0.5rem;
}
.info h3 {
  margin-top: 0.5rem;
}

.info h4 {
  font-size: 1rem;
  margin: 0.3rem 0;
  color: #a1a1a1;
  font-weight: 500;
}
.info p {
  font-size: 0.9rem;
}

.btn {
  margin: 0.5rem 0;
}

.collapse {
  border: 0;
}
</style>
