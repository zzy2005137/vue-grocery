<template>
  <div class="login">
    <el-row justify="center">
      <el-col :span="22">
        <el-card>
          <h2>Admin</h2>
          <el-form class="login-form" :model="model" :rules="rules" ref="form">
            <el-form-item prop="username">
              <el-input
                v-model="model.username"
                placeholder="Username"
                prefix-icon="fas fa-user"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="model.password"
                placeholder="Password"
                type="password"
                prefix-icon="fas fa-lock"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                class="login-button"
                type="primary"
                native-type="submit"
                block
                @click="login"
                >登录</el-button
              >
              <el-button
                class="login-button"
                type="danger"
                plain
                @click="logout"
                >注销</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AV from "leancloud-storage";
import { ElMessage } from "element-plus";
import router from "../router";
export default {
  name: "login",
  data() {
    return {
      model: {
        username: "linbili",
        password: "4502996",
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      AV.User.logIn(this.model.username, this.model.password).then(
        (user) => {
          // 登录成功
          ElMessage({
            showClose: true,
            type: "success",
            message: "登陆成功",
          });
          console.log(user);
          setTimeout(() => {
            router.push("/");
          }, 800);
        },
        (error) => {
          ElMessage({
            showClose: true,
            type: "error",
            message: "登陆失败，用户名或密码错误",
          });
          console.log(error);

          // 登录失败（可能是密码错误）
        }
      );
    },
    logout(e) {
      e.preventDefault();
      AV.User.logOut();
      console.log(AV.User.current());
    },
    register(e) {
      e.preventDefault();
      console.log("register");
    },
  },
};
</script>

<style scoped>
.el-col {
  margin-top: 5rem;
}
.el-card h2 {
  margin-bottom: 1rem;
}
</style>
