<template>
  <div id="UserEdit">
    <myloading :loading="loading">
      <h1>{{id?'编辑':'新建'}}工具</h1>
      <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="model.link"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="afterupload"
            :headers="getAuthHeaders"
          >
            <img v-if="model.icon" :src="model.icon" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </myloading>
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
    // 显示图片
    afterupload(res) {
      this.$set(this.model, "icon", res.url);
    },
    // 提交
    async save() {
      let res;
      if (this.model.link == undefined || this.model.name == undefined) {
        this.$message({
          message: "信息不能为空",
          type: "warning"
        });
      } else {
        if (this.id) {
          res = await this.$axios.post(
            `/rest/tools/resive/${this.id}`,
            this.model
          );
        } else {
          res = await this.$axios.post("/rest/tools/create", this.model);
        }
        // 跳转
        this.$router.push("/tools/list");
        // 提示信息
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    // 获取详情
    async fetch() {
      const res = await this.$axios.get(`/rest/tools/details/${this.id}`);
      this.model = res.data;
    },
    isloading() {
      if (this.model.icon == undefined) {
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
      }, 600);
    } else {
      this.loading = false;
    }
  }
};
</script>
<style>
</style>