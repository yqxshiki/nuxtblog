<template>
  <div id="list">
    <div class="wrap">
      <div class="acticle" v-highlight>
        <h1>{{arrlist.title}}</h1>
        <div class="container" v-highlight>
          <div v-html="arrlist.body"></div>
        </div>
        <div class="end">---------------- The End ----------------</div>
        <!-- 回到顶部 -->
        <div class="backtop" @click="top">^</div>
        <!-- 底部信息 -->
        <div class="copyright">
          <p>
            <span class="title">本文标题</span>:
            <span>{{arrlist.title}}</span>
          </p>
          <p>
            <span class="title">文章作者</span>:
            <span>Scrook</span>
          </p>
          <p>
            <span class="title">发布时间</span>:
            <span>{{arrlist.date}}</span>
          </p>
          <p>
            <span class="title">最后更新</span>:
            <span>{{arrlist.lastdate}}</span>
          </p>
          <p>
            <span class="title">许可协议</span>:
            <span>
              <a
                class="href"
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                target="_blank"
                title="Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)"
              >署名-非商业性使用-禁止演绎 4.0 国际</a> 转载请保留原文链接及作者。
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/atelier-cave-light.css";
import { setInterval, clearInterval } from "timers";
// 代码高亮
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
export default {
  name: "list",
  data() {
    return {
      arrlist: {},
      title: this.$route.params.title,
      // 滚动条
      dtop: "",
      // 回到顶部标签
      backtop: ""
    };
  },
  methods: {
    // 获取内容
    getblog(list) {
      this.axios.get("/rest/acticles/blog/" + list).then(res => {
        this.arrlist = res.data;
      });
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
    getcount(list) {
      this.arrlist.count++;
      this.axios.post("/rest/acticles/resive/" + list, this.arrlist);
    }
  },
  mounted() {
    // 获取详情
    this.getblog(this.$route.params.list);
    setTimeout(() => {
      this.getcount(this.$route.params.list);
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
  },
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "description", content: "yqxshiki" }]
    };
  }
};
</script>
<style  scoped>
#list {
  margin-top: 0.6rem;
}
a {
  color: black;
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* 回到顶部 */
.backtop {
  font-size: 6rem;
  color: #ccc;
  position: fixed;
  right: -5rem;
  bottom: 5rem;
  cursor: pointer;
  transition: 0.7s;
}
/* 文章 */
.acticle {
  width: 750px;
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 2px 2px 2px 2px #aaa;
  background: rgb(217, 216, 223);
}
.acticle:hover {
  box-shadow: 4px 4px 4px 4px #ccc;
}
h1 {
  color: #2c3e5036;
  background-image: url("~static/wenzi.jpeg");
  background-clip: text;
  -webkit-background-clip: text;
  animation: change 3s infinite;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  word-break: break-word;
  font-weight: 400;
}
@keyframes change {
  0% {
    background-position: left 0 top 0px;
  }

  100% {
    background-position: left 800px top 0px;
  }
}
.container p {
  text-indent: 2rem;
}
.end {
  color: #aaa;
  text-align: center;
}
/* 版权信息 */
.copyright {
  width: 85%;
  border: 1px solid #aaa;
  font-size: 0.93rem;
  line-height: 1.6em;
  word-break: break-all;
  background: rgba(255, 255, 255, 0.4);
  margin-top: 1rem;
  margin-left: 3rem;
  box-shadow: 2px 2px 2px 2px #666;
}
.title {
  width: 5.2em;
  color: #333;
  font-weight: bold;
}
.href:hover {
  color: #000;
  border-bottom: 2px solid #555;
}
</style>