<template>
  <div class="preImg" v-show="showPreImg">
    <img :src="preImgUrl" alt="加载中" />
  </div>
  <el-button
    type="primary"
    @click="showPreImg = !showPreImg"
    v-show="showPreImg"
    plain
    class="changeBtn"
    >更换图片</el-button
  >

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
    v-show="!showPreImg"
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
    v-show="showSubmitBtn"
    >保存</el-button
  >

  <el-button @click="goback">返回</el-button>
</template>

<script>
import { ElMessage } from "element-plus";
import AV from "leancloud-storage";
import router from "../router";

export default {
  props: ["objFileId", "objId"],
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
      showPreImg: true,
      showSubmitBtn: true,
      preImgUrl: "",
      objInfo: null,
    };
  },
  methods: {
    checkParam() {
      console.log(this.objFileId);
      console.log(this.objId);
    },
    handleRemove(file, fileList) {
      console.log(file);
    },
    submitUpload() {
      if (this.ruleForm.img) {
        console.log("new img");

        //删除文件
        var targetId = this.objInfo.fileId;
        const file = AV.File.createWithoutData(targetId);
        file.destroy();

        // 上传新文件
        const newFile = new AV.File(this.ruleForm.img.name, this.ruleForm.img);
        this.fullscreenLoading = true;
        newFile
          .save()
          .then((res) => {
            //上传成功后，更新对象信息
            this.updateObj(res);

            //显示预览
            this.preImgUrl = res.url();
            this.showPreImg = true;
            this.fileList = [];
          })
          .catch((error) => {
            this.fullscreenLoading = false;
            this.showErrorMessage("图片上传失败: " + error);
          });
      } else {
        this.updateObj(null);
      }
      //   trigger submit
      // this.$refs.upload.submit()
    },
    updateObj(file) {
      const item = AV.Object.createWithoutData("item", this.objInfo.objectId);
      item.set("name", this.ruleForm.name);
      item.set("description", this.ruleForm.description);
      item.set("category", this.ruleForm.category);
      if (file) {
        var files = [file];
        item.set("img", files);
      }
      this.fullscreenLoading = true;
      item.save().then(
        (res) => {
          // 成功保存之后，执行其他逻辑
          this.showSuccessMessage(`商品信息更新成功`);
          this.showSubmitBtn = false;
          this.fullscreenLoading = false;
        },
        (error) => {
          console.log(error);
          this.fullscreenLoading = false;
          this.showSubmitBtn = false;
          this.showErrorMessage("上传失败: " + error);
          // 异常处理
        }
      );
    },
    loadImg(file, fileList) {
      console.log("handle img");
      this.ruleForm.img = file.raw;
      console.log(this.ruleForm.img);

      // fileList.forEach((element) => {
      //   console.log(element.raw)
      // })
    },
    showSuccessMessage(msg) {
      ElMessage({
        showClose: true,
        type: "success",
        message: msg,
      });
    },
    showErrorMessage(msg) {
      ElMessage({
        showClose: true,
        type: "error",
        message: msg,
      });
    },
    myupload() {
      //验证表单
      if (this.ruleForm.name === "" || this.ruleForm.category === "") {
        this.showErrorMessage("信息不完整");
        return;
      }

      //屏幕锁定，上传中....
      this.fullscreenLoading = true;
      this.uploadObj();
    },
    uploadObj() {
      // const file = new AV.File(this.ruleForm.img.name, this.ruleForm.img)
      // file.save().then(
      //   (file) => {
      //     console.log(`图片保存完成。URL：${file.url()}`)
      //     // 创建对象，关联已上传图片
      //     const Item = AV.Object.extend("item")
      //     const localItem = new Item()
      //     localItem.set("name", this.ruleForm.name)
      //     localItem.set("description", this.ruleForm.description)
      //     localItem.set("category", this.ruleForm.category)
      //     // attachments 是一个 Array 属性
      //     localItem.add("img", file)
      //     localItem.save().then(
      //       (res) => {
      //         // 成功保存之后，执行其他逻辑
      //         this.showSuccessMessage(`商品信息上传成功`)
      //         this.fullscreenLoading = false
      //         this.resetForm("ruleForm")
      //       },
      //       (error) => {
      //         console.log(error)
      //         this.fullscreenLoading = false
      //         this.showErrorMessage("上传失败: " + error)
      //         // 异常处理
      //       }
      //     )
      //   },
      //   (error) => {
      //     // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
      //     console.log(error)
      //     // this.showErrorMessage("上传失败，请重置后重试")
      //     this.fullscreenLoading = false
      //     this.showErrorMessage("上传失败: " + error)
      //   }
      // )
    },
    goback() {
      router.push("/");
    },

    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
      this.fileList = [];
    },
    fillForm(objInfo) {
      this.ruleForm.name = objInfo.name;
      this.ruleForm.description = objInfo.description;
      this.ruleForm.category = objInfo.category;
      this.preImgUrl = objInfo.url;
    },
  },
  created() {
    var objInfo = this.$route.params;
    this.fillForm(objInfo);
    this.objInfo = objInfo;
  },
};
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
.preImg {
  width: 10rem;
  min-height: 10rem;
  overflow: hidden;
  margin: 1rem auto;
  border-radius: 0.5rem;
}
.changeBtn {
  margin-bottom: 1rem;
}
</style>
