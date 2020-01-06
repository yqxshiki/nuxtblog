<template>
  <div id="hot">
    <div class="wrap">
      <el-row :gutter="20">
        <el-col :span="18">
          <h2>
            <i class="iconfont">&#xe601;</i>
            最新文章
          </h2>
          <div class="container">
            <div class="article" v-for="(item,_id) in list" :key="_id">
              <nuxt-link :to="{name:'list-list',params:{list:item._id,title:item.title}}">
                <h4 class="article-title">{{item.title}}</h4>
              </nuxt-link>
              <div class="article-flex">
                <img class="article-img" :src="item.icon" alt />
                <span class="article-sidebar">
                  <div class="article-body">{{item.bodyrender | filter}}</div>
                  <div class="article-info">
                    <img src="../static/icon.jpg" alt />
                    <span>Scrook:{{item.createdAt | yeardata}}</span>
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
                <img src="../static/qqlink.jpg" alt="添加QQ" />
                <img src="../static/wxlink.png" alt="添加微信" />
              </div>
            </div>
          </el-row>
          <el-row :span="6">
            <div class="recommend-info">
              <h3 class="title-border">推荐工具</h3>
              <div v-for="item in tools" :key="item._id" class="tools">
                <a :href="item.link">
                  <img class="toolsimg" :src="item.icon" alt />
                  <span>{{item.name}}</span>
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
                <span class="green">篇文章</span>
              </p>
              <p>
                <strong>标签管理</strong>:
                <span class="green">
                  <nuxt-link to="/category">标签云</nuxt-link>
                </span>
              </p>
            </div>
          </el-row>
          <el-row :span="6">
            <div class="friend-info">
              <h3 class="title-border">友情链接</h3>
              <a href="https://www.yqxshiki.com/">
                <el-tag type="info">个人博客</el-tag>
              </a>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "hot",
  data() {
    return {
      list: [],
      // 工具
      tools: [],
      value: new Date()
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
    async getTools() {
      const res = await this.$axios.get("/web/api/tools");
      this.tools = res.data;
    },
    // 文章
    getBlog() {
      this.$axios.get("/web/api/blog").then(res => {
        let length = res.data.length;
        if (length <= 4) {
          res.data.map((item, index) => {
            this.list.unshift(item);
          });
        } else {
          this.list = res.data.slice(length - 5, length);
        }
      });
    }
  },
  mounted() {
    this.getBlog();
    this.getTools();
  }
};
</script>
<style scoped>
@import '../assets/hot.css';
</style>