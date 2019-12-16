<template>
  <div id="display">
    <el-container>
      <el-main>
        <el-table :data="tableData" stripe border>
          <el-table-column prop="title" label="标题" width="140"></el-table-column>
          <el-table-column prop="body" label="内容" width="740"></el-table-column>
          <el-table-column fixed="right" label="操作" width="130">
            <template slot-scope="scope">
              <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small" @click="deleteblog(scope.row._id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      tableData: [
        {
          title: "",
          categories:"",
          body: ""
        }
      ]
    };
  },
  methods: {
    getblog() {
      this.axios.get("/rest/acticles/blog").then(res => {
        this.tableData = res.data;
        this.tableData.map((item, index) => {
          var body = item.body.replace(/<\/?.+?>/g, "").substring(0, 240);
          item.body = body;
        });
      });
    },
    getcategory() {
      this.axios.get("/category").then(res => {
        console.log(res.data);
      });
    },
    // 编辑
    edit(id) {
      this.$router.push("/resive/" + id);
    },
    // 删除
    deleteblog(id) {
      this.axios.delete("/rest/acticles/delete/" + id).then(res => {
        this.$message({
          message: "恭喜你，删除文章成功",
          type: "success"
        });
        this.getblog();
      });
    }
  },
  mounted() {
    this.getblog();
    // this.getcategory();
  }
};
</script>
<style>
.cell {
  text-indent: 2rem;
}
</style>