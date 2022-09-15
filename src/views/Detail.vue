<template>
  <div class="detail">
    <el-page-header @back="goBack" class="gray"></el-page-header>
    <el-card :body-style="{ padding: '0px' }">
      <!-- card img -->
      <el-image
        class="card-img"
        :src="item.img[0].url"
        fit="cover"
        lazy
      ></el-image>
      <!-- /.card img -->
    </el-card>

    <el-card :body-style="{ padding: '0px' }" class="info">
      <h2>{{ icon }}{{ item.name }}</h2>
      <!-- <el-button type="primary" plain round size="small" class="category">{{
        item.category
      }}</el-button> -->
      <p>{{ item.description }}</p>
      <ul class="list">
        <li><i class="el-icon-circle-check"></i> 新鲜保证</li>
        <li><i class="el-icon-circle-check"></i> 省内包邮</li>
        <li><i class="el-icon-circle-check"></i> 当天可发货</li>
      </ul>
    </el-card>

    <el-button type="success" @click="addToCart()" class="btn"
      >加入购物车</el-button
    >
  </div>
</template>

<script>
import ItemService from "@/service/itemService.js";
import { ElNotification } from "element-plus";
export default {
  name: "Detail",
  data() {
    return {
      item: {
        name: "商品加载中",
        img: [
          {
            // url: "../assets/logo.png",
            // url: "http://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.shejipi.com%2Fwp-content%2Fuploads%2F2017%2F07%2Funtitled-5-1.gif&refer=http%3A%2F%2Fcdn.shejipi.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654670785&t=37fef21811975539689196623c28568a",
          },
        ],
        category: "其他",
      },
    };
  },
  computed: {
    icon() {
      let map = {
        特产: "🥮",
        干货: "🍄",
        其他: "👍",
      };
      return map[this.item.category];
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    copyUrl() {
      //获取当前url
      let url = window.location.href;
      //clipboard api 复制 url
      navigator.clipboard.writeText(url).then(() => {
        ElNotification({
          title: "Success",
          message: "复制链接成功，前往微信了解详情",
          type: "success",
        });
      });
    },
    addToCart(item) {
      let payload = {
        id: this.item.objectId,
        target: {
          name: this.item.name,
          img: this.item.img[0].url,
          quantity: 1,
        },
      };
      this.$store.commit("cart/addItem", payload);
      // ElNotification({
      //   title: "Success",
      //   message: "已添加到购物车",
      //   type: "success",
      // });
      this.$message({
        type: "success",
        message: "已添加到购物车",
      });
    },
  },
  created() {
    let id = this.$route.params.id;
    ItemService.getItemById(id).then((item) => {
      // console.log(item);
      this.item = item;
    });
  },
};
</script>

<style scoped>
.gray {
  color: #6a6969;
}
.detail {
  padding: 0.5rem;
}
.el-card {
  margin-top: 0.5rem;
}
.info {
  padding: 1rem;
  text-align: left;
  position: relative;
}
.info h2 {
  font-size: 1.5rem;
}

.info p {
  color: #6a6969;
  padding-top: 10px;
}

.btn {
  margin: 1rem;
}

.list {
  list-style-type: none;
  color: #b0b0b0;
  display: flex;
  margin-top: 0.5rem;
  justify-content: space-between;
}

.category {
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  /* margin-top: 0.4rem; */
}
</style>
