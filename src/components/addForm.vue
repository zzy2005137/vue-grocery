<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :file-list="fileList"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :auto-upload="false"
    :http-request="myupload"
    ref="upload"
    class="img-upload"
  >
    <i class="el-icon-plus"></i>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="" />
  </el-dialog>

  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="商品类别" prop="category">
      <el-select v-model="ruleForm.category" placeholder="请选择商品类别">
        <el-option
          v-for="(category, index) in categories"
          :key="index"
          :label="category"
          :value="category"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-form>

  <el-button
    type="primary"
    @click="submitUpload"
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-text="上传中"
    >上传</el-button
  >

  <el-button @click="resetForm('ruleForm')">重置</el-button>
</template>

<script>
//上传按钮 =》 图片上传 ==》 获取url ==》 连同名字一起存到对象数据库

import { ElMessage } from "element-plus"
import firebaseApp from "../components/firebaseInit"
import "firebase/firestore"

const Ref = firebaseApp.firestore().collection("items")

export default {
  name: "addForm",
  data() {
    return {
      ruleForm: {
        name: "",
        category: "",
        url: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            message: "长度在 3 到 5 个字符",
            trigger: "blur",
          },
        ],
        category: [
          { required: true, message: "请选择商品类别", trigger: "change" },
        ],
      },

      categories: [],
      dialogImageUrl: "",
      dialogVisible: false,
      fullscreenLoading: false,
      fileList: [],
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitUpload() {
      //   trigger submit
      this.$refs.upload.submit()
    },
    showSuccessMessage() {
      ElMessage.success("上传成功")
    },
    showErrorMessage() {
      ElMessage.error("上传失败")
    },
    myupload(para) {
      //验证表单
      if (this.ruleForm.name === "" || this.ruleForm.category === "") {
        ElMessage({
          showClose: true,
          type: "error",
          message: "信息不完整",
        })
        return
      }
      //上传图片，获取url
      //提交表单，保存对象
      this.uploadImg(para)
    },
    uploadImg(para) {
      //overide the default submit function
      this.fullscreenLoading = true
      var storage = firebaseApp.storage()

      //upload
      var storageRef = storage.ref()
      storageRef
        .child("images/" + this.ruleForm.name)
        .put(para.file)
        .then(() => {
          storageRef
            .child("images/" + this.ruleForm.name)
            .getDownloadURL()
            .then((url) => {
              this.ruleForm.url = url
              this.addToDatabase()
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(this.showErrorMessage)
    },
    addToDatabase() {
      console.log(this.ruleForm.name + " is uploading")
      Ref.add(this.ruleForm)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id)
          this.fullscreenLoading = false

          console.log("上传成功")
          this.fileList = []
          ElMessage({
            showClose: true,
            type: "success",
            message: "上传成功",
          })
        })
        .catch((error) => {
          console.error("Error adding document: ", error)
        })
    },
    // getData() {
    //   var db = firebaseApp.firestore()
    //   db.collection("items")
    //     .get()
    //     .then((res) => {
    //       res.forEach((item) => {
    //         console.log(item.data())
    //       })
    //     })
    // },
    check() {
      console.log(this.ruleForm)
    },

    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields()
      this.fileList = []
    },
  },
  created() {
    var db = firebaseApp.firestore()
    var docRef = db
      .collection("category")
      .doc("list")
      .get()
      .then((list) => {
        this.categories = list.data().categories
        console.log(this.categories)
      })
      .catch((error) => {
        console.log("Error getting document:", error)
      })
  },
}
</script>

<style scoped>
.img-upload {
  margin: 2rem 0;
}

.img {
  width: 10rem;
  height: 10rem;
  overflow: hidden;
}
img {
  width: 100%;
}
</style>
