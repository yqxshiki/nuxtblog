<template>
  <div id="userlist">
    <myloading :loading="loading">
      <h1>工具信息列表</h1>
      <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="240"></el-table-column>
        <el-table-column prop="name" label="名称" width="240"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              @click="$router.push(`/tools/edit/${scope.row._id}`)"
            >编辑</el-button>
            <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </myloading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null,
      loading: true
    };
  },
  methods: {
    // 获取分类列表
    async fetch() {
      const res = await this.$axios.get("rest/tools/category");
      this.items = res.data;
    },
    // 删除
    async remove(row) {
      this.$confirm(`是否要确定删除"${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$axios.delete(`rest/tools/delete/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch(); 
      });
    },
    isloading() {
      if (this.items == null) {
        return;
      } else {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetch();
    if (this.items == null) {
      setInterval(() => {
        this.isloading();
      });
    } else {
      return;
    }
  }
};
</script>
<style>
#userlist {
  width: 100%;
  height: 100%;
}
</style>