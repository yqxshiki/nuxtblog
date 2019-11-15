<template>
  <div id="default">
    <header>
      <div class="wrap">
        <div class="content">
          <nuxt-link to="/">Home</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/blog">Bolg</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/">
            <img class="img" src="../static/scrook.png" alt />
          </nuxt-link>
        </div>
        <div class="content">
          <a href="#">English</a>
        </div>
        <div class="content">
          <nuxt-link to="/withme">Withme</nuxt-link>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="nuxt">
        <nuxt />
      </div>
      <div class="sidebar">
        <div class="center">
          <div class="img">
            <img src="~static/icon.jpg" alt class="touxiang" />
          </div>
          <div class="title">Scrook</div>
          <div class="describe">世人万千种，浮云莫去求，斯人若彩虹，遇上方知有。</div>
          <div class="count">
            <div class="shuzi"></div>
            <div class="rizhi">日志</div>
          </div>
          <div class="icon">
            <a href="https://github.com/yqxshiki?tab=repositories" target="_blank" class="lianjie">
              <span>
                <i class="iconfont">&#xe709;</i>
                <span>GitHub</span>
              </span>
            </a>
            <a href="mailto:1023942883@qq.com" target="_blank" class="lianjie">
              <span>
                <i class="iconfont">&#xe643;</i>
                <span>E-Mail</span>
              </span>
            </a>
          </div>
          <div class="time">
            <span id="htmer_time"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    secondToDate(second) {
      if (!second) {
        return 0;
      }
      var time = new Array(0, 0, 0, 0, 0);
      if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
      }
      if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
      }
      if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
      }
      if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
      }
      if (second > 0) {
        time[4] = second;
      }
      return time;
    },
    setTime() {
      var createtime = Math.round(
        new Date(Date.UTC(2019, 10, 14, 11, 42, 23)).getTime() / 1000
      );
      var timestamp = Math.round(
        (new Date().getTime() + 8 * 60 * 60 * 1000) / 1000
      );
      var currentTime = this.secondToDate(timestamp - createtime);
      var currentTimeHtml =
        "本网站已经运行了：" +
        currentTime[0] +
        "年 " +
        currentTime[1] +
        "天 " +
        currentTime[2] +
        "时 " +
        currentTime[3] +
        "分 " +
        currentTime[4] +
        "秒";
      document.getElementById("htmer_time").innerHTML = currentTimeHtml;
    }
  },
  mounted() {
    setInterval(this.setTime(), 1000);
  }
};
</script>
<style scoped>
/* 头部 */
header {
  width: 100%;
  height: 100px;
  margin-top: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
}
.wrap {
  display: flex;
  justify-content: space-around;
}
.content a {
  color: #fff;
}
.content a:hover {
  border-bottom: 1px solid aqua;
  color: aqua;
}
.img {
  width: 210px;
  height: 60px;
  margin-top: -20px;
}
/* 内容区 */
.container {
  display: flex;
  width: 80%;
  position: relative;
  margin: 0 auto;
}
.nuxt {
  flex: 8;
  border: 1px solid #f40;
}
/* 侧边栏 */
.sidebar {
  flex: 2;
  width: 240px;
  border: 1px solid black;
  opacity: 0.9;
  color: #555;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  border-radius: initial;
}
.center {
  text-align: center;
}
.sidebar div {
  width: 240px;
  margin-top: 0.8rem;
}
.sidebar .img {
  height: 200px;
}
/* icon */
a span {
  color: #555;
}
a span i {
  font-size: 16px;
}
.center .img {
  margin-top: 40px;
}
.touxiang {
  width: 130px;
  height: 180px;
  border: 1px solid #eee;
  border-radius: 60%;
}
.lianjie:hover {
  background: #ccc;
  opacity: 0.6;
}
/* 名称 */
.title {
  font-size: 18px;
  font-weight: 700;
}
/* 描述 */
.describe {
  color: #999;
  font-size: 13px;
}
div.time {
  width: 80%;
  color: #7b68ee;
  text-shadow: 0 5px 5px #00bfff;
  font-size: 16px;
  text-indent: 1rem;
  text-align: center;
  padding: 6px;
  margin-bottom: 40px;
}
</style>
