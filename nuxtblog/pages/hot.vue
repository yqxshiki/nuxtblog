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
                  <img class="toolsimg" :src="item.icon" alt />
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
                <span class="green">{{this.length}}篇文章</span>
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
              <div v-for="item in fslinks" :key="item._id" class="fslinks">
                <a :href="item.link">
                  <el-tag :type="item.type">{{item.name}}</el-tag>
                </a>
              </div>
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
      length: "",
      list: [],
      // 工具
      tools: [],
      fslinks: [],
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
      const res = await this.$axios.get("/tools");
      this.tools = res.data;
    },
    async getfslink() {
      const res = await this.$axios.get("/fslinks");
      this.fslinks = res.data;
    },
    // 文章
    getBlog() {
      this.$axios.get("/blog").then(res => {
        this.length = res.data.length;
        if (length <= 4) {
          res.data.map((item, index) => {
            this.list.unshift(item);
          });
        } else {
          this.list = res.data.slice(this.length - 5, this.length);
        }
      });
    }
  },
  mounted() {
    this.getBlog();
    this.getTools();
    this.getfslink();
  }
};
</script>
<style  lang="scss" scoped>
.wrap {
  max-width: 76%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;

  .el-col-18 {
    background: #fff;

    /* 标签 */
    h2 {
      color: red;
      margin-left: 2rem;
      margin-top: 1rem;
      cursor: pointer;

      .iconfont {
        color: red;
      }
    }

    /* 总体布局 */
    .container {
      width: 80%;
      margin: 0 auto;

      .article {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 2rem;

        .article-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          font-family: "Times New Roman", Times, serif;
        }

        &:hover .article-title {
          color: #337ab7;
        }

        &:hover .article-img {
          transform: scale(1.1);
        }

        .article-img {
          width: 200px;
          transition: all 0.7s;
        }

        /* 文章 */
        .article-flex {
          display: flex;

          .article-sidebar {
            margin-left: 1rem;
            min-width: 340px;

            .article-body {
              overflow: hidden;
              text-indent: 1rem;
              color: #666;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
            }

            .article-info {
              color: #096;
              display: flex;
              align-items: center;
              margin-top: 1rem;

              img {
                width: 34px;
                height: 34px;
                display: inline-block;
                border-radius: 100%;
                margin-right: 1rem;
              }
            }
          }
        }
      }
    }
  }

  /* sidebar */
  .el-row-6 {
    margin-left: 10%;
  }
  .title-border {
    border-bottom: 2px solid #eee;
    line-height: 40px;
  }

  // 右边栏
  .sidebar-info {
    background: #fff;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-bottom: 0.8rem;
    max-width: 300px;
    margin-top: -1rem;

    .flex {
      .img {
        width: 100px;
      }
    }
  }

  .website-info,
  .recommend-info,
  .friend-info {
    background: #fff;
    padding: 0.8rem;
    margin-top: 1rem;
    max-width: 300px;
  }

  //   网站信息
  .website-info {
    // 点击文字
    .green,
    .green a {
      color: #096;
    }
  }

  //   工具
  .recommend-info {
    .tools {
      width: 100%;
      height: 70px;
      margin-bottom: 1rem;
      font-size: 0.8rem;

      a {
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;

        .tool-name {
          width: 100%;
        }

        &:hover .toolsimg {
          transform: scale(1.1);
        }

        img {
          width: 70px;
          margin-left: 1rem;
          margin-right: 1rem;
          transition: all 0.5s;
        }
      }
    }
  }

  //   友情博客
  .friend-info {
    background: #fff;
    padding: 0.8rem;
    margin-top: 1rem;
    max-width: 300px;

    .fslinks {
      margin: 0.4rem;
    }
  }
}
</style>