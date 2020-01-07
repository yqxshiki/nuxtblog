<template>
  <div id="blog">
    <div class="container">
      <div class="list rainbow" v-for="item in list" :key="item.index">
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
    const res = await $axios.get("/blog");
    return { list: res.reverse() };
  }
};
</script>
<style scoped>
@import '../assets/blog.css'
</style>