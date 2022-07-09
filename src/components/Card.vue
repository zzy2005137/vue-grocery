<template>
  <el-card :body-style="{ padding: '0px' }" class="card">
    <!-- card imagr -->
    <el-image
      class="card-img pointer"
      :src="item.img[0].url"
      fit="cover"
      @click="showDetail"
      
    ></el-image>
    <!-- /.card imagr -->
    <!-- card content -->
    <div>
      <h3 class="title">{{ item.name }}</h3>
    </div>
    <!-- card content -->
    <div class="operation">
      <!-- admin option -->
      <el-button
        v-if="$store.state.isAdmin"
        class="btn"
        @click="$emit('deleteObj')"
        type="danger"
        plain
        >删除</el-button
      >
      <el-button
        v-if="$store.state.isAdmin"
        class="btn"
        @click="$emit('updateObj')"
        type="success"
        plain
        >修改</el-button
      >
      <!-- admin option -->
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: "商品加载中",
          img: [
            {
              url: "sss",
              // url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.shejipi.com%2Fwp-content%2Fuploads%2F2017%2F07%2Funtitled-5-1.gif&refer=http%3A%2F%2Fcdn.shejipi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654670785&t=37fef21811975539689196623c28568a",
            },
          ],
        };
      },
    },
  },
  name: "ItemCard",
  methods: {
    showDetail() {
      let id = this.item.objectId;
      this.$router.push({ name: "Detail", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.card-img {
  width: 100%;
  height: 10rem;
}

.card .title {
  color: #213547;
  padding: 0.5rem;
}
.el-card {
  margin-top: 1rem;
  /* min-height: 14.5rem; */
}
.operation {
  margin-bottom: 1rem;
}
.pointer {
  cursor: pointer;
}
</style>
