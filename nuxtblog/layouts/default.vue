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
        <!-- <nuxt keep-alive /> -->
        <nuxt />
      </div>
      <!-- 侧边栏 -->
      <div class="relative">
        <div class="sidebar bb">
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
    </div>
    <!-- 回到顶部 -->
    <div class="backtop" @click="top" ref="top">^</div>
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
      item: null,
      // 滚动条
      dtop: "",
      // 回到顶部标签
      backtop: ""
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
    },
    // 回到顶部
    top() {
      let timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    getscrool() {
      if (this.dtop >= 650) {
        this.backtop.style.right = 3 + "rem";
        this.backtop.style.bottom = 3 + "rem";
      } else {
        this.backtop.style.right = -5 + "rem";
        this.backtop.style.bottom = -3 + "rem";
      }
    },
    // set icon
    seticon() {
      var link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href =
        "https://hexophoto-1259178461.cos.ap-beijing.myqcloud.com/photos/img/icon.jpg";
      document.getElementsByTagName("head")[0].appendChild(link);
    },
    // set foonter
    getbottom() {
      let bodyHeight = document.getElementsByTagName("body")[0].clientHeight;
      let footer = document.getElementsByTagName("footer")[0];
      let containerHeight = document.getElementsByClassName("container")[0]
        .clientHeight;
      footer.style.bottom = -(bodyHeight - containerHeight - 100 - 38) + "px";
    }
  },
  mounted() {
    this.getuserinfo;
    this.seticon();
    let tiembottom = setInterval(() => {
      if (
        this.$route.name == "blog" ||
        this.$route.name == "list-list" ||
        this.$route.name == "index"
      ) {
        return;
      } else {
        this.getbottom();
      }
    }, 800);

    let times = setTimeout(() => {
      if (this.item) {
        setInterval(this.setTime(), 1000);
      } else {
        clearTimeout(times);
      }
    }, 1000);

    // 滚动效果
    this.backtop = document.getElementsByClassName("backtop")[0];
    const timer = setInterval(() => {
      this.dtop = document.documentElement.scrollTop || document.body.scrollTop;
      this.getscrool();
    }, 500);

    // 销毁
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  }
};
</script>
<style scoped>
@import "../assets/default.css";
</style>
