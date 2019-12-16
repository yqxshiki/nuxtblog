<template>
  <div id="resive">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
        <a name="top"></a>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-select v-model="form.categories">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容">
        <mavon-editor v-model="form.body" ref="md" style="min-height: 600px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="info" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
    <a name="bottom"></a>
    <div class="icon">
      <div class="go">
        <a href="#top">
          <i class="el-icon-top"></i>
        </a>
      </div>
      <div class="go">
        <a href="#bottom">
          <i class="el-icon-bottom"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// markdown
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "create",
  components: {
    mavonEditor
  },
  data() {
    return {
      form: {
        title: "",
          categories: "",
        body: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.form.title == "" || this.form.body == "") {
        this.$message({
          message: "文章标题或者文章内容不能为空",
          type: "warning"
        });
      } else {
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        let date = myDate.getDate();
        // 获取创建时间
        let nowdate = year + "-" + month + "-" + date;
        let newform = {
          title: this.form.title,
          body: this.form.body,
          lastdate: nowdate
        };
        this.axios
          .post("/rest/acticles/resive/" + this.$route.params.id, newform)
          .then(res => {
            this.$message({
              message: "恭喜你，修改成功",
              type: "success"
            });
            this.$router.push("/display");
          });
      }
    },
    // 取消
    cancel() {
      this.form.title = "";
      this.form.body = "";
    },
    getblog() {
      this.axios
        .get("/rest/acticles/blog/" + this.$route.params.id)
        .then(res => {
          this.form = res.data;
        });
    }
  },
  mounted() {
    this.getblog();
  }
};
</script>
<style scoped>
.icon {
  position: absolute;
  right: 3rem;
  top: 50%;
  z-index: 80000;
}
.go {
  background: #ccc;
  border-radius: 50%;
  margin: 1rem;
}
.go i {
  font-size: 2rem;
}
</style>