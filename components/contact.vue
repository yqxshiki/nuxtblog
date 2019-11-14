<template>
  <div id="contact">
    <div class="container">
      <div class="wrap">
        <div class="icon">
          <i class="iconfont">&#xe6ca;</i>
        </div>
        <div class="description">QQ support</div>
        <div class="mindescription">1023942883</div>
      </div>

      <div class="wrap">
        <div class="icon">
          <i class="iconfont">&#xe605;</i>
        </div>
        <div class="description">Mail support</div>
        <div class="mindescription">
          1023942883@qq.com
          <strong>Or</strong>
          yiqixingyb@yeah.net
        </div>
      </div>

      <div class="wrap">
        <div class="icon">
          <i class="iconfont">&#xe64b;</i>
        </div>
        <div class="description">Our store</div>
        <div class="mindescription">Wuhan Qingchuan University</div>
      </div>

      <div class="wrap">
        <div class="icon">
          <i class="iconfont">&#xe603;</i>
        </div>
        <div class="description">Personal blog</div>
        <div class="mindescription">https://www.yqxshiki.com/</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 300px;
  width: 100%;
  height: 300px;
}
.wrap div {
  width: 100%;
  height: 80px;
  margin-top: -1rem;
}
.description {
  font-size: 24px;
  font-weight: bolder;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.mindescription {
  font-size: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
/* iconfont */
@font-face {
  font-family: "iconfont"; /* project id 1505337 */
  src: url("//at.alicdn.com/t/font_1505337_23q2fryjtld.eot");
  src: url("//at.alicdn.com/t/font_1505337_23q2fryjtld.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1505337_23q2fryjtld.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1505337_23q2fryjtld.woff") format("woff"),
    url("//at.alicdn.com/t/font_1505337_23q2fryjtld.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1505337_23q2fryjtld.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 3rem;
  font-style: normal;
  color: skyblue;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
