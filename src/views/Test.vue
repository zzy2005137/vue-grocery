<template>
  <div class="tes">
    <h1>hello</h1>
    <form @submit="uploadImg">
      <label for="name">name</label>
      <input type="text" id="name" v-model="item.name" /> <br />
      <label for="description">description</label>
      <input type="text" id="description" v-model="item.description" /><br />
      <label for="category">category</label>
      <input type="text" id="category" v-model="item.category" /><br />
      <label for="img">image</label>
      <input type="file" id="img" @change="loadImg" /><br />
      <input type="submit" name="create" />
    </form>
    <button @click="getObj">getObj</button><br />
    <button @click="getOneObj">getOneObj</button><br />
    <button @click="updateOneObj">updateOneObj</button>
    <hr />
    <div class="show" v-for="obj in objArray" :key="obj.objectId">
      <img :src="obj.img[0].url" alt="xxx" />
      <h3>{{ obj.name }}</h3>
      <p>{{ obj.description }}</p>
      <button @click="deleteObj(obj)">删除该对象</button>
    </div>
  </div>
</template>

<script>
import AV from "leancloud-storage";

export default {
  name: "test",
  data() {
    return {
      item: {
        name: "",
        description: "",
        category: "",
        img: null,
      },
      showObj: {
        name: "",
        description: "",
        imgUrl: {},
      },
      objArray: [],
    };
  },
  methods: {
    check() {},
    loadImg(e) {
      this.item.img = e.target.files[0];
    },
    uploadImg(e) {
      e.preventDefault();

      const avatarUpload = document.getElementById("img");
      if (avatarUpload.files.length) {
        const localFile = avatarUpload.files[0];
        const file = new AV.File(localFile.name, localFile);
        file.save().then(
          (file) => {
            console.log(`图片保存完成。URL：${file.url()}`);
            // 创建对象，关联已上传图片
            const Item = AV.Object.extend("item");
            const localItem = new Item();
            localItem.set("name", this.item.name);
            localItem.set("description", this.item.description);
            localItem.set("category", this.item.category);
            // attachments 是一个 Array 属性
            localItem.add("img", file);
            localItem.save().then(
              (res) => {
                // 成功保存之后，执行其他逻辑
                console.log(`对象保存成功。objectId：${res.id}`);
              },
              (error) => {
                console.log(error);

                // 异常处理
              }
            );
          },
          (error) => {
            // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
            console.log(error);
          }
        );
      }
    },
    uploadObj() {},
    getObj() {
      console.log("进入getObj");

      const query = new AV.Query("item");
      query.include("img");
      //单个查询
      // query.first().then((res) => {
      //   // console.log(res.get("img")[0].url())
      //   this.showObj.name = res.get("name")
      //   this.showObj.description = res.get("description")
      //   this.showObj.imgUrl = res.get("img")[0].url()
      // })

      query.find().then((items) => {
        // items 是包含满足条件的对象的数组
        // toJSON()方法一次获取对象的全部属性，而不用一个个get
        // console.log(items[0].get("img")[0].id)

        var container = [];
        items.forEach((item) => {
          container.push(item.toJSON());
        });
        this.objArray = container;
        console.log(this.objArray);
      });
    },
    getOneObj() {
      const query = new AV.Query("item");
      query.include("img");
      //单个查询
      // query.first().then((res) => {
      //   // console.log(res.get("img")[0].url())
      //   // this.showObj.name = res.get("name")
      //   // this.showObj.description = res.get("description")
      //   // this.showObj.imgUrl = res.get("img")[0].url()
      //   console.log(res.toJSON())
      // })

      //获取指定对象

      let temp;
      query.get("6143f2585e26b06dbb219329").then((res) => {
        // console.log(res.get("img")[0])
        temp = res;

        console.log(temp.get("img"));
        console.log("================================");
        console.log("change the img");

        this.changeImg(temp.get("img"));
      });
    },
    changeImg(fileArray) {
      console.log(fileArray);
      const query = new AV.Query("item");
      query.include("img");
      let temp;
      query.get("6143fb71fb77015d809c2c19").then((res) => {
        res.set("img", fileArray);
        res.save().then((res) => {
          console.log("更新成功");
          console.log(res);
        });
      });
    },
    updateOneObj() {
      console.log("update one obj");
      //更新对象
      const item = AV.Object.createWithoutData(
        "item",
        "6143f2585e26b06dbb219329"
      );
      item.set("name", "new name");
      item.save();
    },
    deleteObj(obj) {
      console.log(obj.img[0].objectId);

      //删除文件
      var targetId = obj.img[0].objectId;
      const file = AV.File.createWithoutData(targetId);
      file.destroy();

      //删除对象
      const item = AV.Object.createWithoutData("item", obj.objectId);
      item.destroy();
      //更新数组

      this.objArray.pop();

      console.log("删除成功");
    },

    create(e) {
      e.preventDefault();

      // 声明 class
      const localItem = AV.Object.extend("item");

      // 构建对象
      const item1 = new localItem();

      // 为属性赋值
      item1.set("name", this.item.name);
      item1.set("description", this.item.description);

      // 将对象保存到云端
      item1.save().then(
        (item1) => {
          // 成功保存之后，执行其他逻辑
          console.log(`保存成功。objectId：${item1.id}`);
        },
        (error) => {
          // 异常处理
          console.log(error);
        }
      );
    },
    getImg() {
      const query = new AV.Query("_File");
      // query.equalTo("priority", 2)
      query.first().then((img) => {
        console.log(img.attributes.url);
        this.url = img.attributes.url;
      });
    },
  },
};
</script>

<style scoped></style>
