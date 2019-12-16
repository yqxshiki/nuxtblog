<template>
  <div id="blog">
    <div class="container">
      <div class="list" v-for="item in list" :key="item.index">
        <div class="title">
          <nuxt-link :to="{name:'list-list',params:{list:item._id,title:item.title}}">{{item.title}}</nuxt-link>
          <!-- 发表时间 -->
          <div class="time">
            <i class="iconfont">&#xe63d;</i>
            发表于: {{item.date}}
          </div>
          <!-- 内容 -->
          <p class="content">{{item.body|filter}}</p>
        </div>

        <div class="yuedu">
          <i class="iconfont">&#xe636;</i>
          阅读次数:{{item.count
          }}
        </div>

        <!-- 阅读全文 -->
        <div class="button">
          <nuxt-link :to="{name:'list-list',params:{list:item._id,title:item.title}}">阅读全文</nuxt-link>
        </div>
        <!-- 结束符 -->
        <div class="end">---------------- The End ----------------</div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div class="backtop" @click="top" ref="top">^</div>
  </div>
</template>

<script>
export default {
  // 标题
  head() {
    return {
      title: "Blog",
      meta: [{ hid: "description", name: "Blog", content: "Blog" }]
    };
  },
  data() {
    return {
      list: "",
      // 滚动条
      dtop: "",
      // 回到顶部标签
      backtop: ""
    };
  },
  // 过滤
  filters: {
    filter(val) {
      return val.replace(/<\/?.+?>/g, "");
    }
  },
  methods: {
    // 获取文章接口
    getlist() {
      this.axios.get("http://localhost:4000/api/blog").then(res => {
        this.list = res.data;
        this.list = this.list.reverse();
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
    }
  },
  mounted() {
    this.getlist();
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
#blog {
  margin-top: -2rem;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
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
.list {
  width: 750px;
  height: 300px;
  box-shadow: -6px -6px 6px 4px rgb(224, 198, 198);
  margin-top: 2rem;
  padding: 1rem;
  background: rgb(217, 216, 223);
  text-align: center;
  border-radius: 2px;
}
.list:hover {
  box-shadow: 5px 5px 30px #aaa;
}
.list div {
  margin-top: 1rem;
}
/* 标题 */
.title a {
  font-size: 24px;
  font-weight: bolder;
  color: #2c3e5036;
  background-image: url("~static/wenzi.jpeg");
  background-clip: text;
  -webkit-background-clip: text;
  animation: change 3s infinite;
  transition: all 0.7s;
}
.title a:hover {
  border-bottom: 2px solid #555;
}
@keyframes change {
  0% {
    background-position: left 0 top 0px;
  }

  100% {
    background-position: left 800px top 0px;
  }
}
.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-indent: 2rem;
  letter-spacing: 3px;
  text-shadow: 1px 1px 10px;
}
/* 发布时间 */
.time {
  font-size: 0.8rem;
  color: rgb(119, 116, 116);
}
.iconfont {
  font-size: 1rem;
  color: #000;
}
.button a {
  color: #555 !important;
  background-color: #fff;
  border: none !important;
  transition-property: unset;
  padding: 0px 15px;
  border-radius: 3px;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  line-height: 2;
  font-size: 1rem;
}
.button a:hover {
  color: #fff !important;
  border-radius: 3px;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
  background-image: linear-gradient(
    90deg,
    #a166ab 0%,
    #ef4e7b 25%,
    #f37055 50%,
    #ef4e7b 75%,
    #a166ab 100%
  );
}
/* 结束 */
.end {
  color: #aaa;
  text-align: center;
}
</style>