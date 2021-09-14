<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :file-list="fileList"
    :on-remove="handleRemove"
    :on-change="loadImg"
    :auto-upload="false"
    :http-request="myupload"
    ref="upload"
    class="img-upload"
    limit="1"
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
    <el-form-item label="商品简介" prop="description">
      <el-input v-model="ruleForm.description"></el-input>
    </el-form-item>
    <el-form-item v-if="categories" label="商品类别" prop="category">
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
import { ElMessage } from "element-plus"
import AV from "leancloud-storage"

export default {
  name: "addForm",
  data() {
    return {
      ruleForm: {
        name: "",
        description: "",
        category: "",
        img: null,
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

      categories: ["干货", "特产", "其他"],
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
    submitUpload() {
      //   trigger submit
      this.$refs.upload.submit()
    },
    loadImg(file, fileList) {
      console.log("handle img")
      this.ruleForm.img = file.raw
      console.log(this.ruleForm.img)
      // fileList.forEach((element) => {
      //   console.log(element.raw)
      // })
    },
    showSuccessMessage(msg) {
      ElMessage({
        showClose: true,
        type: "success",
        message: msg,
      })
    },
    showErrorMessage(msg) {
      ElMessage({
        showClose: true,
        type: "error",
        message: msg,
      })
    },
    myupload() {
      //验证表单
      if (this.ruleForm.name === "" || this.ruleForm.category === "") {
        this.showErrorMessage("信息不完整")
        return
      }

      //屏幕锁定，上传中....
      this.fullscreenLoading = true
      this.uploadObj()
    },
    uploadObj() {
      const file = new AV.File(this.ruleForm.img.name, this.ruleForm.img)
      file.save().then(
        (file) => {
          console.log(`图片保存完成。URL：${file.url()}`)

          // 创建对象，关联已上传图片
          const Item = AV.Object.extend("item")
          const localItem = new Item()
          localItem.set("name", this.ruleForm.name)
          localItem.set("description", this.ruleForm.description)
          localItem.set("category", this.ruleForm.category)
          // attachments 是一个 Array 属性
          localItem.add("img", file)
          localItem.save().then(
            (res) => {
              // 成功保存之后，执行其他逻辑
              this.showSuccessMessage(`商品信息上传成功`)
              this.fullscreenLoading = false
              this.resetForm("ruleForm")
            },
            (error) => {
              console.log(error)

              this.fullscreenLoading = false
              this.showErrorMessage("上传失败: " + error)

              // 异常处理
            }
          )
        },
        (error) => {
          // 保存失败，可能是文件无法被读取，或者上传过程中出现问题

          console.log(error)
          // this.showErrorMessage("上传失败，请重置后重试")
          this.fullscreenLoading = false
          this.showErrorMessage("上传失败: " + error)
        }
      )
    },

    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields()
      this.fileList = []
    },
  },
  created() {},
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
