<template>
  <div class="tes">
    <h1>hello</h1>
    <form @submit="uploadImg">
      <label for="name">name</label>
      <input type="text" id="name" v-model="item.name" /> <br />
      <label for="description">description</label>
      <input type="text" id="description" v-model="item.description" /><br />
      <label for="img">image</label>
      <input type="file" id="img" @change="loadImg" /><br />
      <input type="submit" name="create" />
    </form>
    <button @click="getObj">getObj</button>
    <hr />
    <div class="show">
      <img :src="showObj.imgUrl" alt="xxx" />
      <h3>{{ showObj.name }}</h3>
      <p>{{ showObj.description }}</p>
    </div>
  </div>
</template>

<script>
import AV from "leancloud-storage"

export default {
  name: "test",
  data() {
    return {
      item: {
        name: "",
        description: "",
        img: null,
      },
      showObj: {
        name: "",
        description: "",
        imgUrl: {},
      },
    }
  },
  methods: {
    check() {},
    loadImg(e) {
      this.item.img = e.target.files[0]
    },
    uploadImg(e) {
      e.preventDefault()

      const avatarUpload = document.getElementById("img")
      if (avatarUpload.files.length) {
        const localFile = avatarUpload.files[0]
        const file = new AV.File(localFile.name, localFile)
        file.save().then(
          (file) => {
            console.log(`图片保存完成。URL：${file.url()}`)
            // 创建对象，关联已上传图片
            const Item = AV.Object.extend("item")
            const localItem = new Item()
            localItem.set("name", this.item.name)
            localItem.set("description", this.item.description)
            // attachments 是一个 Array 属性
            localItem.add("img", file)
            localItem.save().then(
              (res) => {
                // 成功保存之后，执行其他逻辑
                console.log(`对象保存成功。objectId：${res.id}`)
              },
              (error) => {
                console.log(error)

                // 异常处理
              }
            )
          },
          (error) => {
            // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
            console.log(error)
          }
        )
      }
    },
    uploadObj() {},
    getObj() {
      const query = new AV.Query("item")
      query.include("img")
      query.first().then((res) => {
        // console.log(res.get("img")[0].url())
        this.showObj.name = res.get("name")
        this.showObj.description = res.get("description")
        this.showObj.imgUrl = res.get("img")[0].url()
      })
    },

    create(e) {
      e.preventDefault()

      // 声明 class
      const localItem = AV.Object.extend("item")

      // 构建对象
      const item1 = new localItem()

      // 为属性赋值
      item1.set("name", this.item.name)
      item1.set("description", this.item.description)

      // 将对象保存到云端
      item1.save().then(
        (item1) => {
          // 成功保存之后，执行其他逻辑
          console.log(`保存成功。objectId：${item1.id}`)
        },
        (error) => {
          // 异常处理
          console.log(error)
        }
      )
    },
    getImg() {
      const query = new AV.Query("_File")
      // query.equalTo("priority", 2)
      query.first().then((img) => {
        console.log(img.attributes.url)
        this.url = img.attributes.url
      })
    },
  },
}
</script>
