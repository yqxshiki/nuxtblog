<template>
  <div id="create">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="文章标题">
        <a name="top"></a>
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <el-select v-model="form.categories">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容">
        <mavon-editor
          :ishljs="true"
          v-model="form.body"
          ref="md"
          @change="change"
          style="min-height: 600px"
        />
        <!-- <el-input type="textarea" v-model="form.body"></el-input> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="info" @click="cancel">取消</el-button>
      </el-form-item>
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
    </el-form>
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
  props: {
    id: {}
  },
  data() {
    return {
      form: {
        title: "",
        categories: "",
        body: ""
      },
      // 类别
      parents: "",
      // 渲染的内容
      html: ""
    };
  },
  methods: {
    // 提交
    onSubmit() {
      if (
        this.form.title == "" ||
        this.form.body == "" ||
        this.form.categories == ""
      ) {
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
          categories: this.form.categories,
          body: this.html,
          date: nowdate,
          lastdate: nowdate,
          count: 0
        };
        let res;
        if (this.id) {
          res = this.axios.post(
            "/rest/acticles/resive/" + this.$route.params.id,
            newform
          );
        } else {
          res = this.axios.post("/rest/acticles/create", newform);
        }
        this.$message({
          message: "恭喜你，保存成功",
          type: "success"
        });
        this.$router.push("/displaylist");
      }
    },
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 取消
    cancel() {
      this.form.title = "";
      this.form.body = "";
      this.form.categories = "";
    },
    // 获取类别
    async fetchparent() {
      const res = await this.axios.get("/rest/categories/category");
      this.parents = res.data;
    },
    // 获取文章详情
    async getblog() {
      const res = await this.axios.get(
        "/rest/acticles/blog/" + this.$route.params.id
      );
      this.form = res.data;
    }
  },
  mounted() {
    this.fetchparent();
    this.id && this.getblog();
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