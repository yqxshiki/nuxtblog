<template>
  <div id="hot">
    <div class="wrap">
      <h2>
        <i class="iconfont">&#xe66c;</i>
        最新文章
      </h2>
      <!-- <div class="container d-flex">
        <div class="acticlebody d-flex">
          <div class="article" v-for="(item,_id) in list" :key="_id">
            <nuxt-link :to="{name:'list-list',params:{list:item._id,title:item.title}}">
              <div class="bodyskeleton" v-show="isshow"></div>
              <div class="articlecont">
                <div class="title">{{item.title}}</div>
                <div class="body">{{item.bodyrender | filter}}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="right">
          <div class="info"></div>
        </div>
      </div>-->
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <el-row :span="6">
            <div class="sidebar-info">
              <h3>我的名片</h3>
              <div class="userinfo">
                <p>网名:Scrook</p>
                <p>职业:web前端开发工程师</p>
                <p>现居:湖北省-武汉市</p>
                <p>Email:1023942883@qq.com</p>
              </div>
            </div>
          </el-row>
          <el-row :span="6">
            <div class="sidebar-info"></div>
          </el-row>
          <el-row :span="6">
            <div class="sidebar-info"></div>
          </el-row>
          <el-row :span="6">
            <div class="sidebar-info"></div>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "hot",
  data() {
    return {
      arrimg: [],
      list: [],
      isshow: true
    };
  },
  // 过滤
  filters: {
    filter(val) {
      return val.replace(/<\/?.+?>/g, "");
    }
  },
  methods: {
    // 文章
    getblog() {
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
    },
    // 图片
    getimg() {
      this.$axios
        .get(
          "https://www.fastmock.site/mock/27daaace66e047350e2beff518943c0f/nuxt/acticlepic"
        )
        .then(res => {
          this.arrimg = res.data.data;
        });
    },
    // 去掉空白
    hiddenimg() {
      let img = document.querySelectorAll(".noneimg");
      for (let i = 0; i < img.length; i++) {
        const item = img[i];
        if (item.currentSrc == "") {
          item.parentNode.style.display = "none";
        }
      }
    },
    loading() {
      if (this.list !== []) {
        this.isshow = false;
      }
    }
  },
  created() {
    setInterval(() => {
      this.loading();
    }, 1000);
  },
  mounted() {
    this.getblog();
    this.getimg();
    setTimeout(() => {
      this.hiddenimg();
    }, 1000);
  }
};
</script>
<style scoped>
.wrap {
  width: 90%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  margin: 0 auto;
}
/* 标签 */
h2 {
  color: red;
  margin-left: 2rem;
  margin-top: 1rem;
  cursor: pointer;
}
h2 .iconfont {
  color: red;
}

.bg-purple {
  background: #d3dce6;
}
.sidebar-info {
  background: rgb(99, 88, 88);
  color: #d0d2d4;
}
</style>