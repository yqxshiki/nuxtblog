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
        <div class="description">My location</div>
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
@media screen and (max-width: 600px) {
  #contact {
    display: none;
  }
}
#contact {
  width: 100%;
  height: 240px;
  margin-top: -2rem;
}
.container {
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 200px;
  width: 100%;
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
.iconfont {
  font-size: 3rem;
}
</style>
