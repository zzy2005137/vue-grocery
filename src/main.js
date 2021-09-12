import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"

import "element-plus/dist/index.css"

createApp(App).use(router).use(ElementPlus).mount("#app")

import AV from "leancloud-storage"

AV.init({
  appId: "Ulaw7giTyqj4y7HPb5ghyo5d-gzGzoHsz",
  appKey: "2NrLba4t067j7p7iNCzd2joJ",
  serverURL: "https://ulaw7git.lc-cn-n1-shared.com",
})
