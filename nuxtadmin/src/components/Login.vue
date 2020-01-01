<template>
  <div id="login" class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      if (
        this.model.username == undefined ||
        this.model.password == undefined
      ) {
        this.$message({
          type: "warning",
          message: "请输入用户名或者密码"
        });
      } else {
        const res = await this.$axios.post("/login", this.model);
        // 存入localStorage
        localStorage.token = res.data;
        this.$router.push("/");
        this.$message({
          type: "success",
          message: "登录成功"
        });
      }
    }
  },
};
</script>
<style scoped>
.login-card {
  width: 25rem;
  height: 20rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
</style>