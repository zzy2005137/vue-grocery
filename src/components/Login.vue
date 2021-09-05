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
                :loading="loading"
                class="login-button"
                type="primary"
                native-type="submit"
                block
                @click="register"
                >注册</el-button
              >
              <el-button
                :loading="loading"
                class="login-button"
                type="primary"
                native-type="submit"
                block
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
export default {
  name: "login",
  data() {
    return {
      validCredentials: {
        username: "zzy2005137",
        password: "854297163",
      },
      model: {
        username: "",
        password: "",
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
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      console.log(this.model.username + " " + this.model.password)
    },
    logout(e) {
      e.preventDefault()
      console.log("logout")
    },
    register(e) {
      e.preventDefault()
      console.log("register")
    },
  },
}
</script>

<style scoped>
.el-col {
  margin-top: 5rem;
}
.el-card h2 {
  margin-bottom: 1rem;
}
</style>
