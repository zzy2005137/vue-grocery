<template>
  <div class="back">
    <el-page-header @back="goBack" content="管理页面" class="header">
    </el-page-header>

    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="序号" prop="date" min-width="50">
      </el-table-column>
      <el-table-column label="名称" prop="name" min-width="180">
      </el-table-column>
      <el-table-column align="right" min-width="150">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-button
      type="primary"
      icon="el-icon-plus"
      circle
      class="add-button"
    ></el-button>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import db from "../components/firebaseInit"

export default {
  name: "back",
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "用纯蜂蜜自家产撒旦看风",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2",
          name: "张志扬",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "3",
          name: "俊树",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "4",
          name: "bbb",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      search: "",
    }
  },
  methods: {
    async addItem() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        })
        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>

<style scoped>
.item-list {
  margin: 1rem 0.5rem;
}

.add-button {
  font-size: 1.5rem;
  position: fixed;

  left: 1rem;
  bottom: 2rem;
}

.header {
  margin: 0.5rem 0.2rem;
}
</style>
