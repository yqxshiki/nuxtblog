<template>
  <div id="blog">
    <div class="container">
      <div class="list  rainbow" v-for="item in list" :key="item.index">
        <div class="title">
          <nuxt-link
            keep-alive
            :to="{name:'list-list',params:{list:item._id,title:item.title}}"
          >{{item.title}}</nuxt-link>
          <!-- 发表时间 -->
          <div class="time">
            <i class="iconfont">&#xe63d;</i>
            发表于: {{item.createdAt | yeardata}}
          </div>
          <!-- 内容 -->
          <p class="content">{{item.bodyrender|filter}}</p>
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
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "blog",
  // 标题
  head() {
    return {
      title: "Blog",
      meta: [{ hid: "description", name: "Blog", content: "Blog" }]
    };
  },
  // 过滤
  filters: {
    filter(val) {
      return val.replace(/<\/?.+?>/g, "");
    },
    yeardata(val) {
      return dayjs(val).format("YYYY/MM/DD");
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.get("/web/api/blog");
    return { list: res.reverse() };
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
  position: relative;
  height: 360px;
  box-shadow: -6px -6px 6px 4px rgb(224, 198, 198);
  margin-top: 3rem;
  padding: 1rem;
  background: rgb(217, 216, 223);
  text-align: center;
  border-radius: 2px;
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