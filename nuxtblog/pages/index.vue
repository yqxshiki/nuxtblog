<template>
  <div id="index">
    <div class="center">
      <swiper />
      <!-- <bloghot/> -->
      <div class="wrap">
        <el-row :gutter="20">
          <el-col :span="18">
            <h2>
              <i class="iconfont">&#xe601;</i>
              最新文章
            </h2>
            <div class="container" :class="getSkeleton=='img'?'skeleton':' '">
              <div class="article" v-for="(item,_id) in list" :key="_id">
                <nuxt-link :to="{name:'detail-list-list',params:{list:item._id,title:item.title}}">
                  <h2 class="article-title">{{item.title}}</h2>
                </nuxt-link>
                <div class="article-flex">
                  <img class="article-img" v-lazy="item.icon" alt />
                  <span class="article-sidebar">
                    <p class="article-body">{{item.bodyrender | filter}}</p>
                    <div class="article-info">
                      <img src="../static/icon.jpg" alt />
                      <p>Scrook:{{item.createdAt | yeardata}}</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <el-row :span="6">
              <div class="sidebar-info">
                <h3 class="title-border">我的名片</h3>
                <div class="userinfo">
                  <p>
                    <strong>网名</strong>:Scrook
                  </p>
                  <p>
                    <strong>职业</strong>:web前端开发工程师
                  </p>
                  <p>
                    <strong>现居</strong>:湖北省-武汉市
                  </p>
                  <p>
                    <strong>Email</strong>:1023942883@qq.com
                  </p>
                </div>
                <div class="flex">
                  <img class="img" src="../static/qqlink.jpg" alt="添加QQ" />
                  <img class="img" src="../static/wxlink.png" alt="添加微信" />
                </div>
              </div>
            </el-row>
            <el-row :span="6">
              <div class="recommend-info">
                <h3 class="title-border">推荐工具</h3>
                <div v-for="item in tools" :key="item._id" class="tools">
                  <a :href="item.link" target="_blank">
                    <img class="toolsimg" v-lazy="item.icon" alt />
                    <span class="tool-name">{{item.name}}</span>
                  </a>
                </div>
              </div>
            </el-row>
            <el-row :span="6">
              <div class="website-info">
                <h3 class="title-border">站点信息</h3>
                <p>
                  <strong>建站时间</strong>:2019-12-14
                </p>
                <p>
                  <strong>网站类型</strong>:博客
                </p>
                <p>
                  <strong>文章统计</strong>:
                  <span class="green">{{this.list.length}}篇文章</span>
                </p>
                <p>
                  <strong>标签管理</strong>:
                  <span class="green">
                    <nuxt-link to="/detail/category">标签云</nuxt-link>
                  </span>
                </p>
              </div>
            </el-row>
            <el-row :span="6">
              <div class="friend-info">
                <h3 class="title-border">友情链接</h3>
                <div v-for="item in fslinks" :key="item._id" class="fslinks">
                  <a :href="item.link" target="_blank">
                    <el-tag :type="item.type">{{item.name}}</el-tag>
                  </a>
                </div>
              </div>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <contact />
    </div>
    <blogfooter></blogfooter>
  </div>
</template>

<script>
import dayjs from "dayjs";
import swiper from "@/pages/swpier";
import contact from "@/pages/contact";
import blogfooter from "@/pages/footer";
export default {
  layout: "default",
  name: "index",
  components: {
    swiper,
    contact,
    blogfooter
  },
  head() {
    return {
      title: "Scrook博客",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "Scrook博客", content: "Scrook博客" }
      ]
    };
  },
  data() {
    return {
      list: [],
      // 工具
      tools: [],
      fslinks: [],
      getSkeleton: "img"
    };
  },
  // // 过滤
  filters: {
    filter(val) {
      return val.replace(/<\/?.+?>/g, "");
    },
    yeardata(val) {
      return dayjs(val).format("YYYY/MM/DD");
    }
  },
  async asyncData({ $axios }) {
    //文章
    const res = await $axios.get("/blog");
    let list = [];
    for (let i = 0; i < res.length; i++) {
      var reg = res[i].bodyrender.replace(/<\/?.+?>/g, "");
      reg = reg.slice(0, 240);
      res[i].bodyrender = reg;
    }
    if (res.length <= 5) {
      res.map((item, index) => {
        list.unshift(item);
      });
    } else {
      list = res.slice(res.length - 5, res.length).reverse();
    }
    //工具
    const tools = await $axios.get("/tools");
    //友情博客
    const fslinks = await $axios.get("/fslinks");
    return {
      list: list,
      tools: tools,
      fslinks: fslinks
    };
  },
  created() {
    if (process.client) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => {
          this.$nuxt.$loading.finish();
          this.getSkeleton = "end";
        });
      });
    }
  }
};
</script>
<style  lang="scss" scoped>
@import "../assets/hot.scss";
@media screen and (max-width: 900px) {
  .wrap .el-col-18 .container .article {
    width: 100%;
  }
  .wrap {
    margin-left: 0;
    width: 100%;
    margin: 0 auto;

    .article-flex {
      width: 100%;
      overflow: hidden;
      img {
        display: none;
      }
    }
  }
  .container {
    width: 100%;
  }
  div.el-col-6 {
    display: none;
  }
  div.el-col-18 {
    width: 100%;
  }
}
.skeleton {
  background: #ccc;
}
#index {
  width: 100%;
  /* height: 100%; */
  margin-top: 3rem;
}
.center {
  width: 100%;
  margin: 0 auto;
}
.introduce {
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  color: #000;
}
.introduce:hover {
  color: #000;
}
</style>