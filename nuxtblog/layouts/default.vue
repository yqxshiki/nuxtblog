<template>
  <div id="default">
    <div class="github">
      <a href="https://github.com/yqxshiki" target="_blank">
        <img
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149"
          alt
        />
      </a>
    </div>
    <!-- 头部 -->
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
          <nuxt-link to="/category">Category</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/withme">Withme</nuxt-link>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- 内容 -->
      <div class="nuxt">
        <nuxt />
      </div>
      <!-- 侧边栏 -->
      <div class="sidebar">
        <div class="center" v-if="item">
          <div class="img">
            <img src="~static/icon.jpg" alt class="touxiang" />
          </div>
          <div class="title">{{item.title}}</div>
          <div class="describe">{{item.describe}}</div>
          <div class="count">
            <div class="shuzi"></div>
            <div class="rizhi">日志</div>
          </div>
          <div class="icon">
            <a :href="item.gitlink" target="_blank" class="lianjie">
              <span>
                <i class="iconfont">&#xe709;</i>
                <span>GitHub</span>
              </span>
            </a>
            <a :href="item.qqlink" target="_blank" class="lianjie">
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

    <!-- 底部 -->
    <footer>
      <div class="copyright">
        <span class="quan">©2019</span>
        <span class="with-ren">
          <i class="iconfont">&#xebac;</i>
        </span>
        <span class="author">Scrook</span>
      </div>
      <div class="skill">
        <span>
          由
          <a href="https://zh.nuxtjs.org/" target="_blank">NuxtJS</a>编写
        </span>
        <span>
          仿照
          <a href="https://www.yqxshiki.com/" target="_blank">用Hexo Next完成的Blog</a>
        </span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: null
    };
  },
  computed: {
    // 获取用户信息
    async getuserinfo() {
      const res = await this.$axios.get("/user/info");
      this.item = res.data[0];
    }
  },
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
        // currentTime[0] +
        // "月 " +
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
    this.getuserinfo;
    let times = setTimeout(() => {
      if (this.item) {
        setInterval(this.setTime(), 1000);
      } else {
        clearTimeout(times);
      }
    },1000);
  }
};
</script>
<style scoped>
.github {
  position: absolute;
  left: 0;
  top: 0;
}
.github img {
  width: 100px;
}
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
  width: 70%;
  position: relative;
  margin: 0 auto;
}
.nuxt {
  flex: 8;
  width: 80%;
  opacity: 0.9;
  box-sizing: border-box;
  margin-top: -1rem;
}
/* 侧边栏 */
.sidebar {
  flex: 2;
  width: 240px;
  height: 510px;
  margin-left: 4rem;
  opacity: 0.9;
  color: #555;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  border-radius: initial;
  box-sizing: border-box;
}
.center {
  width: 100%;
  text-align: center;
}
.sidebar div {
  width: 240px;
  margin-top: 0.8rem;
}
.sidebar .img {
  height: 200px;
  transition: 2.5s all;
}
.sidebar .img:hover {
  transform: rotate(360deg);
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
  border-radius: 60%;
  border: 1px solid black;
}
.lianjie:hover {
  border-radius: 4px;
  background: #eee;
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
/* 底部栏 */
footer {
  width: 100%;
  height: 80px;
  margin-top: 2rem;
  font-size: 1.2rem;
}
footer div {
  width: 100%;
  text-align: center;
}
footer div a {
  color: aquamarine;
}
footer div a:hover {
  color: aqua;
  border-bottom: 1px solid aqua;
}
</style>
