<template>
  <div id="home">
    <el-container style="border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router unique-opened :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>博客管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/categories/create">新建文章分类</el-menu-item>
              <el-menu-item index="/categories/list">文章分类列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/displaylist">展示文章</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/create">创建文章</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/img/list">展示轮播图</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/img/create">创建轮播图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>用户管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/list">展示管理员</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/admin/create">创建管理员</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/users/list">展示用户</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/users/create">创建用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>sidebar管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/tools/list">展示工具</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/tools/create">创建工具</el-menu-item>
            </el-menu-item-group
               <el-menu-item-group>
              <el-menu-item index="/fslinks/list">展示友情博客</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/fslinks/create">创建友情博客</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-switch-button" style="margin-right: 15px" @click="quit"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  methods: {
    quit() {
      localStorage.token = "";
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100vh;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    color: #333;
    height: 100%;
  }
}
</style>
