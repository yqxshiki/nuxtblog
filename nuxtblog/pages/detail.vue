<template>
  <div id="detail">
    <div class="split">
      <nuxt />
      <div class="container">
        <div class="relative">
          <div class="sidebar bb">
            <div class="center" v-if="item">
              <div class="img">
                <img v-lazy="item.icon" alt class="touxiang" />
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
    </div>

    <!-- 回到顶部 -->
    <div class="backtop" @click="top" ref="top">^</div>
    <!-- 底部 -->
    <footer>
      <div class="footer">
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
            <a href="https://www.yqxshiki.com/" target="_blank">用Hexo Next完成的Blog</a>
          </span>
        </div>
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
  async asyncData({ $axios }) {
    const res = await $axios.get("/user/info");
    return { item: res[0] };
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
      var timer = setInterval(function() {
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
    // getscrool() {
    //   if (this.dtop >= 550) {
    //     if (this.backtop == undefined) {
    //       return false;
    //     } else {
    //       this.backtop.style.right = 3 + "rem";
    //       this.backtop.style.bottom = 3 + "rem";
    //     }
    //   } else {
    //     if (this.backtop == undefined) {
    //       return false;
    //     } else {
    //       this.backtop.style.right = -5 + "rem";
    //       this.backtop.style.bottom = -3 + "rem";
    //     }
    //   }
    // },
    // set icon
    seticon() {
      var link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href =
        "https://hexophoto-1259178461.cos.ap-beijing.myqcloud.com/photos/img/icon.jpg";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
  },
  created() {
    if (process.client) {
      this.seticon();
      let times = setTimeout(() => {
        if (this.item) {
          setInterval(this.setTime(), 1000);
        } else {
          clearTimeout(times);
        }
      }, 1000);
    }
  }
};
</script>
<style scoped lang="scss">
@media screen and (min-width: 901px) {
  @import "../assets/default.css";
  #detail {
    width: 100%;
    margin-top: 4rem;

    .split {
      display: flex;
      width: 80%;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 900px) {
  .split {
    width: 100%;
    margin: 0 auto;
    .container {
      display: none;
    }
  }
}
</style>