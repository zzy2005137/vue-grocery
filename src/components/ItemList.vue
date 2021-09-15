<template>
  <div id="item-list">
    <div v-if="objArray.length === 0" class="waiting">
      <h1>图片加载中...</h1>
    </div>
    <transition-group tag="ul" name="list" class="container">
      <el-card
        v-for="item in objArray"
        :key="item.objectId"
        shadow="never"
        class="item"
        :body-style="{ padding: 0 }"
      >
        <ItemCard :item="item" @deleteObj="deleteObj(item)" />
      </el-card>
    </transition-group>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue"
import AV from "leancloud-storage"

export default {
  props: ["option"],
  components: {
    ItemCard,
  },
  data() {
    return {
      objArray: [],
    }
  },
  methods: {
    getObjs() {
      const query = new AV.Query("item")
      query.include("img")
      //单个查询
      // query.first().then((res) => {
      //   // console.log(res.get("img")[0].url())
      //   this.showObj.name = res.get("name")
      // })

      query.find().then((items) => {
        // items 是包含满足条件的对象的数组
        // toJSON()方法一次获取对象的全部属性，而不用一个个get
        // console.log(items[0].get("img")[0].id)

        var container = []
        items.forEach((item) => {
          container.push(item.toJSON())
        })
        this.objArray = container
        console.log(this.objArray)
      })
    },

    deleteObj(obj) {
      // console.log(obj.img[0].objectId)

      //删除文件
      var targetId = obj.img[0].objectId
      const file = AV.File.createWithoutData(targetId)
      file.destroy()

      //删除对象
      const item = AV.Object.createWithoutData("item", obj.objectId)
      item.destroy()

      //更新数组
      const targetIndex = this.objArray.findIndex((element) => {
        return element.objectId === obj.objectId
      })

      this.objArray.splice(targetIndex, 1)

      console.log("删除成功")
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
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          })
        })
    },
  },

  computed: {
    filterItems() {
      return this.objArray.filter((item) => {
        return item.category === this.option
      })
    },
  },

  created() {
    this.getObjs()
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
