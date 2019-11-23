<template>
  <div id="blog">
    <div class="container">
      <div class="list" v-for="item in list" :key="item.index">
        <div class="title">
          <nuxt-link
            :to="{name:'list-list',params:{list:item._id,title:item.title}}"
          >{{item.title}}</nuxt-link>
        </div>
        <div class="time">
          <i class="iconfont">&#xe63d;</i>
          发表于: {{item.date}}
        </div>
        <!-- <div class="yuedu">
          <i class="iconfont">&#xe636;</i>
          阅读次数:{{count}}
        </div> -->
        <div class="button">
          <nuxt-link
            :to="{name:'list-list',params:{list:item._id,title:item.title}}"
          >阅读全文</nuxt-link>
        </div>
        <div class="end">---------------- The End ----------------</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Blog",
      meta: [{ hid: "description", name: "Blog", content: "Blog" }]
    };
  },
  data() {
    return {
      list: "",
      count: 0
    };
  },
  methods: {
    // 获取文章接口
    getlist() {
      this.axios.get("http://49.232.96.54:4000/api/blog").then(res => {
        this.list = res.data;
      });
    }
  },
  mounted() {
    this.getlist();
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
/* 文章 */
.list {
  width: 750px;
  height: 200px;
  box-shadow: 2px 2px 2px 2px #fff;
  margin-top: 1rem;
  padding: 1rem;
  background: rgb(217, 216, 223);
  text-align: center;
}
.list:hover {
  box-shadow: 5px 5px 30px 5px #aaa;
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