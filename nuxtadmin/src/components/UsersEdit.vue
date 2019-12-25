<template>
  <div id="UserEdit">
    <h1>{{id?'编辑':'新建'}}用户</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.describe"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="afterupload"
          :headers="getAuthHeaders()"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="github链接">
        <el-input v-model="model.gitlink"></el-input>
      </el-form-item>
      <el-form-item label="qq链接">
        <el-input v-model="model.qqlink"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <mavon-editor
          :ishljs="true"
          v-model="model.about"
          ref="md"
          @change="change"
          style="min-height: 600px"
          @imgAdd="$imgAdd"
        />
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
      model: {
        aboutrender: ""
      },
      html: ""
    };
  },
  methods: {
    // 显示图片
    afterupload(res) {
      this.$set(this.model, "icon", res.url);
    },
    // 请求头
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ""}`
      };
    },
    change(value, render) {
      this.html = render;
    },
    // 提交
    async save() {
      let res;
      this.model.aboutrender = this.html;
      if (this.id) {
        res = await this.$axios.post(
          `/rest/users/resive/${this.id}`,
          this.model
        );
      } else {
        res = await this.$axios.post("/rest/users/create", this.model);
      }
      // 跳转
      this.$router.push("/users/list");
      // 提示信息
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    // 获取详情
    async fetch() {
      const res = await this.$axios.get(`/rest/users/details/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style>
</style>