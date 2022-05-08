import AV from "./init.js";
import { ElMessage } from "element-plus";
function logOut() {
  AV.User.logOut().then(
    ElMessage({
      showClose: true,
      type: "success",
      message: "退出成功",
    })
  );
}

function isAdmin() {
  const currentUser = AV.User.current();
  if (currentUser && currentUser.getUsername() === "linbili") {
    return true;
  } else {
    return false;
  }
}

export default { logOut, isAdmin };
