<template>
  <div id="CategoryEdit">
    <h1>{{id?'编辑':'新建'}}文章分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parents">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
      parents: []
    };
  },
  methods: {
    // 提交
    async save() {
      let res;
      if (this.model.name == undefined) {
        this.$message({
          message: "分类内容不能为空",
          type: "warning"
        });
      } else {
        if (this.id) {
          res = await this.$axios.post(
            `/rest/categories/resive/${this.id}`,
            this.model
          );
        } else {
          res = await this.$axios.post("/rest/categories/create", this.model);
        }
        // 跳转
        this.$router.push("/categories/list");
        // 提示信息
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    // 获取详情
    async fetch() {
      const res = await this.$axios.get(`/rest/categories/details/${this.id}`);
      this.model = res.data;
    },
    async fetchparent() {
      const res = await this.$axios.get("/rest/categories/category");
      this.parents = res.data;
    }
  },
  created() {
    this.fetchparent();
    this.id && this.fetch();
    console.log(this.model.name);
  }
};
</script>
<style>
</style>