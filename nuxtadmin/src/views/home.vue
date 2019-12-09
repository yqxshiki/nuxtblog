<template>
  <div id="home">
    <el-container style="border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>博客管理
            </template>
            <el-menu-item-group>
              <template slot="title">详情</template>
              <router-link to="/display">
                <el-menu-item index="1-1">展示文章</el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="管理">
              <router-link to="/create">
                <el-menu-item index="1-3">创建文章</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
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
