<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  // background: #ccc;
  .el-input {
    max-width: 640px;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
@font-face {
  font-family: "iconfont"; /* project id 1505337 */
  src: url("//at.alicdn.com/t/font_1505337_7h29yed9dct.eot");
  src: url("//at.alicdn.com/t/font_1505337_7h29yed9dct.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1505337_7h29yed9dct.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1505337_7h29yed9dct.woff") format("woff"),
    url("//at.alicdn.com/t/font_1505337_7h29yed9dct.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1505337_7h29yed9dct.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  color: skyblue;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
