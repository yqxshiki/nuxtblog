﻿<template>
  <div class="wrap">
    <el-row :gutter="20">
      <el-col :span="18">
        <h2>
          <i class="iconfont">&#xe601;</i>
          最新文章
        </h2>
        <div class="container">
          <div class="article" v-for="(item,_id) in list" :key="_id">
            <nuxt-link :to="{name:'detail-list-list',params:{list:item._id,title:item.title}}">
              <h4 class="article-title">{{item.title}}</h4>
            </nuxt-link>
            <div class="article-flex">
              <img class="article-img" v-lazy="item.icon" alt />
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
              <img class="img" src="../static/qqlink.jpg" alt="添加QQ" />
              <img class="img" src="../static/wxlink.png" alt="添加微信" />
            </div>
          </div>
        </el-row>
        <el-row :span="6">
          <div class="recommend-info">
            <h3 class="title-border">推荐工具</h3>
            <div v-for="item in tools" :key="item._id" class="tools">
              <a :href="item.link">
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
      fslinks: []
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
  // 获取文章
  async asyncData({ $axios }) {
    const res = await $axios.get("/blog");
    let bloglist = [];
    if (res.length <= 5) {
      res.map((item, index) => {
        bloglist.unshift(item);
      });
    } else {
      bloglist = res.slice(res.length - 5, res.length).reverse();
    }
    return { list: bloglist };
  },
  methods: {
    async getTools() {
      const res = await this.$axios.get("/tools");
      this.tools = res.data;
    },
    async getfslink() {
      const res = await this.$axios.get("/fslinks");
      this.fslinks = res.data;
    }
  },
  created() {
    this.getTools();
    this.getfslink();
    // this.getBlog();
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
</style>