<template>
  <div id="blog">
    <div class="container">
      <div
        class="list rainbow"
        v-for="item in list.slice((currentpage-1)*page_size,currentpage*page_size)"
        :key="item.index"
      >
        <div class="title">
          <nuxt-link
            keep-alive
            :to="{name:'detail-list-list',params:{list:item._id,title:item.title}}"
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
          <nuxt-link :to="{name:'detail-list-list',params:{list:item._id,title:item.title}}">阅读全文</nuxt-link>
        </div>
        <!-- 结束符 -->
        <div class="end">---------------- The End ----------------</div>
      </div>
    </div>
    <div class="center">
      <el-pagination
        @size-change="change_size_change"
        @current-change="change_current_page"
        :page-size="page_size"
        :page-sizes="[5,10,15,20]"
        :current-page="currentpage"
        background
        layout="prev, pager, next"
        :total="list.length"
      ></el-pagination>
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
      title: "博客列表--Scrook博客",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "Blog", content: "博客列表--Scrook博客" }
      ]
    };
  },
  data() {
    return {
      list: [],
      page_size: 5,
      currentpage: 1
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
  methods: {
    change_size_change(size) {
      this.page_size = size;
    },
    // 第几页
    change_current_page(size) {
      this.currentpage = size;
    }
  },
  async asyncData({ $axios }) {
    //文章
    const res = await $axios.get("/blog");
    let list = [];
    for (let i = 0; i < res.length; i++) {
      var reg = res[i].bodyrender.replace(/<\/?.+?>/g, "");
      var reg1 = reg.replace(/(^\s*)|(\s*$)/g, "");
      reg1 = reg1.slice(0, 240);
      res[i].bodyrender = reg1;
    }
    return { list: res.reverse() };
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/blog.scss";

@media screen and (max-width: 900px) {
  #blog .container .list {
    width: 60%;
    height: auto;
  }
}
.center {
  text-align: center;
  font-size: 24px;
}
</style>