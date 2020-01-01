<template>
  <div id="UserEdit">
    <myloading :loading="loading">
      <h1>{{id?'编辑':'新建'}}轮播图</h1>
      <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="名称">
          <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <el-button size="smali" @click="model.items.push({})">
            <i class="el-icon-plus"></i>
            添加图片
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap;margin-top:0.5rem">
            <el-col :md="24" v-for="(item,i) in model.items" :key="i">
              <el-form-item label="图片信息">
                <el-input v-model="item.image"></el-input>
              </el-form-item>
              <el-form-item label="图片上传" style="margin-top:0.5rem">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :show-file-list="false"
                  :on-success="res=>$set(item,'url',res.url)"
                  :headers="getAuthHeaders()"
                >
                  <img v-if="item.url" :src="item.url" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button size="smali" type="danger" @click="model.items.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
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
      model: {
        items: []
      },
      html: "",
      loading: true
    };
  },
  methods: {
    // 请求头
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ""}`
      };
    },
    // 提交
    async save() {
      let res;
      if (this.model.items.url ==undefined) {
        this.$message({
          message: "图片信息不能为空",
          type: "warning"
        });
      } else {
        if (this.id) {
          res = await this.$axios.post(
            `/rest/imgs/resive/${this.id}`,
            this.model
          );
        } else {
          res = await this.$axios.post("/rest/imgs/create", this.model);
        }
        // 跳转
        this.$router.push("/img/list");
        // 提示信息
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    // 获取详情
    async fetch() {
      const res = await this.$axios.get(`/rest/imgs/details/${this.id}`);
      this.model = res.data;
    },
    isloading() {
      if (this.model.items == undefined) {
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