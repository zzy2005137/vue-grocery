import AV from "./init.js";

async function getItems() {
  const query = new AV.Query("item");
  query.include("img");
  let items = await query.find();
  let container = [];
  items.forEach((item) => {
    container.push(item.toJSON());
  });
  return container;
}

async function getItemById(id) {
  const query = new AV.Query("item");
  query.include("img");
  query.equalTo("objectId", id);
  let item = await query.first();
  return item.toJSON();
}

async function deleteItem(obj) {
  //删除文件
  const targetId = obj.img[0].objectId;
  const file = AV.File.createWithoutData(targetId);
  await file.destroy();

  //删除对象
  const item = AV.Object.createWithoutData("item", obj.objectId);
  await item.destroy();
}

export default {
  getItems,
  deleteItem,
  getItemById,
};

// function getObjs() {
//   const query = new AV.Query("item");
//   query.include("img");
//   //单个查询
//   // query.first().then((res) => {
//   //   // console.log(res.get("img")[0].url())
//   //   this.showObj.name = res.get("name")
//   // })

//   query.find().then((items) => {
//     // items 是包含满足条件的对象的数组
//     // toJSON()方法一次获取对象的全部属性，而不用一个个get
//     // console.log(items[0].get("img")[0].id)

//     var container = [];
//     items.forEach((item) => {
//       container.push(item.toJSON());
//     });
//     objArray = container;
//     console.log(objArray);
//   });
// }

// function deleteObj(obj) {
//   // console.log(obj.img[0].objectId)

//   //删除文件
//   var targetId = obj.img[0].objectId;
//   const file = AV.File.createWithoutData(targetId);
//   file.destroy();

//   //删除对象
//   const item = AV.Object.createWithoutData("item", obj.objectId);
//   item.destroy();

//   //更新数组
//   const targetIndex = this.objArray.findIndex((element) => {
//     return element.objectId === obj.objectId;
//   });

//   this.objArray.splice(targetIndex, 1);

//   console.log("删除成功");
// }

// function confirmDelete() {
//   this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
//     confirmButtonText: "确定",
//     cancelButtonText: "取消",
//     type: "warning",
//     center: true,
//   })
//     .then(() => {
//       this.$message({
//         type: "success",
//         message: "删除成功!",
//       });
//     })
//     .catch(() => {
//       this.$message({
//         type: "info",
//         message: "已取消删除",
//       });
//     });
// }
// function updateObj(item) {
//   // const imgId = item.img[0].objectId
//   // const objId = item.objectId

//   router.push({
//     name: "Update",
//     params: {
//       fileId: item.img[0].objectId,
//       objectId: item.objectId,
//       url: item.img[0].url,
//       name: item.name,
//       description: item.description,
//       category: item.category,
//     },
//   });
// }
