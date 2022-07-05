<template>
  <div id="item-list">
    <div v-if="objArray.length === 0" class="waiting">
      <h1>图片加载中...</h1>
    </div>
    <div tag="ul" name="list" class="container">
      <el-card
        v-for="item in filterItems"
        :key="item.objectId"
        shadow="never"
        class="item"
        :body-style="{ padding: 0 }"
      >
        <ItemCard
          :item="item"
          @deleteObj="deleteObj(item)"
          @updateObj="updateObj(item)"
        />
      </el-card>
    </div>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import AV from "leancloud-storage";
import router from "../router";
import ItemService from "@/service/itemService.js";

export default {
  props: {
    option: {
      type: String,
      default: "全部",
    },
  },
  components: {
    ItemCard,
  },
  data() {
    return {
      objArray: [],
    };
  },
  methods: {
    async getObjs() {
      this.objArray = await ItemService.getItems();
    },

    deleteObj(obj) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          ItemService.deleteItem(obj);
          //更新数组
          const targetIndex = this.objArray.findIndex(
            (element) => element.objectId === obj.objectId
          );
          this.objArray.splice(targetIndex, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    confirmDelete() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    updateObj(item) {
      // const imgId = item.img[0].objectId
      // const objId = item.objectId

      router.push({
        name: "Update",
        params: {
          fileId: item.img[0].objectId,
          objectId: item.objectId,
          url: item.img[0].url,
          name: item.name,
          description: item.description,
          category: item.category,
        },
      });
    },
  },

  computed: {
    filterItems() {
      if (this.option === "全部") {
        return this.objArray;
      } else {
        return this.objArray.filter((item) => item.category === this.option);
      }
    },
  },

  created() {
    this.getObjs();
  },
};
</script>

<style scoped>
#item-list {
  max-width: 800px;
}
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
