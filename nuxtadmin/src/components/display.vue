<template>
  <div id="display">
    <myloading :loading="loading">
      <el-container>
        <el-main>
          <el-table :data="tableData" stripe border>
            <el-table-column prop="title" label="标题" width="140"></el-table-column>
            <el-table-column prop="bodyrender" label="内容" ></el-table-column>
            <el-table-column fixed="right" label="操作" width="130">
              <template slot-scope="scope">
                <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" @click="deleteblog(scope.row._id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </myloading>
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
          bodyrender: ""
        }
      ],
      loading: true
    };
  },
  methods: {
    async getblog() {
      const res = await this.$axios.get("/rest/acticles/blog");
      this.tableData = await res.data;
      this.tableData.map((item, index) => {
        var bodyrender = item.bodyrender
          .replace(/<\/?.+?>/g, "")
          .substring(0, 240);
        item.bodyrender = bodyrender;
      });
    },
    // 编辑
    edit(id) {
      this.$router.push("/resive/" + id);
    },
    // 删除
    deleteblog(id) {
      this.$axios.delete("/rest/acticles/delete/" + id).then(res => {
        this.$message({
          message: "恭喜你，删除文章成功",
          type: "success"
        });
        this.getblog();
      });
    },
    isloading() {
      if (this.tableData[0].bodyrender == undefined) {
        return;
      } else {
        this.loading = false;
      }
    }
  },
  created() {
    this.getblog();
    if (this.tableData.bodyrender == undefined) {
      setInterval(() => {
        this.isloading();
      });
    } else {
      return;
    }
  }
};
</script>
<style scoped>
#display {
  width: 100%;
  height: 100%;
}
.cell {
  text-indent: 2rem;
}
</style>