<template>
  <div class="items">
    
    <!-- 分类标签 -->
    <el-tabs type="border-card" v-model="activeName" @tab-click="changeOption">
      <el-tab-pane
        class="tabs"
        v-for="(name, key) in category"
        :key="key"
        :label="name"
        :name="name"
      >
        <!-- 主要显示部分 -->
        <div>
          <el-row justify="space-around">
            <el-col :span="11" v-for="item in filterItems" :key="item.objectId">
              <Card
                class="card"
                :item="item"
                @deleteObj="deleteObj(item)"
                @updateObj="updateObj(item)"
              ></Card>
            </el-col>
          </el-row>
        </div>
        <!-- 主要显示部分 END -->
      </el-tab-pane>
    </el-tabs>
    <!-- 分类标签 END -->
  </div>
</template>

<script>
import router from "../router";
import ItemService from "@/service/itemService.js";
import Card from "@/components/Card.vue";

export default {
  name: "Items",
  props: ["id"],
  components: {
    Card,
  },
  data() {
    return {
      objArray: [],
      category: ["全部", "特产", "干货", "其他"],
      option: "全部",
      activeName: "全部",
    };
  },
  methods: {
    async getObjs() {
      this.objArray = await ItemService.getItems();
      // console.log(this.objArray);
    },
    changeOption() {
      this.option = this.activeName;
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
    let hash = {
      1: "全部",
      2: "特产",
      3: "干货",
      4: "其他",
    };
    if (this.id) {
      this.option = hash[this.id];
      this.activeName = hash[this.id];
    }
  },

  beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    console.log(to.params.id);
  },
};
</script>

<style scoped>
.el-col .card {
  height: 92%;
}

.tab {
  background-color: #e9e9eb;
  padding: 0.3rem;
  color: #303133;
}
.tab:focus,
.tab:active {
  background-color: #fdf6ec;
  color: #409eff;
}

.tabs {
  position: sticky;
  top: 0;
}
</style>
