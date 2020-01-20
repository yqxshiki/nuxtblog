<template>
  <div id="UserEdit">
    <h1>{{id?'编辑':'新建'}}用户</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      loading: true
    };
  },
  methods: {
    // 提交
    async save() {
      let res;
      if (
        this.model.username == undefined ||
        this.model.password == undefined
      ) {
        this.$message({
          message: "用户信息不能为空",
          type: "warning"
        });
      } else {
        if (this.id) {
          res = await this.$axios.post(
            `/rest/admins/resive/${this.id}`,
            this.model
          );
        } else {
          res = await this.$axios.post("/rest/admins/create", this.model);
        }
        // 跳转
        this.$router.push("/admin/list");
        // 提示信息
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    // 获取详情
    async fetch() {
      const res = await this.$axios.get(`/rest/admins/details/${this.id}`);
      this.model = res.data;
    },
    isloading() {
      if (this.model.username == undefined) {
        return;
      } else {
        this.loading = false;
      }
    }
  },
  created() {
    this.id && this.fetch();
    if (this.id) {
      setInterval(() => {
        this.isloading();
      });
    } else {
      this.loading = false;
    }
  }
};
</script>
<style>
</style>