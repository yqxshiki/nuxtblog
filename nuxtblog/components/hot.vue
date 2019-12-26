<template>
  <div id="hot">
    <div class="wrap">
      <h2>
        <i class="iconfont">&#xe66c;</i>
        最新文章
      </h2>
      <div class="container">
        <!-- 图片 -->
        <div class="pic">
          <div class="img" v-for="(item,index) in arrimg" :key="index">
            <!-- 骨架屏 -->
            <div class="skeleton" v-show="isshow"></div>
            <p class="hidden">{{list.length>index?item.imgsrc:item.imgsrc=""}}</p>
            <img class="noneimg" alt :src="item.imgsrc" />
          </div>
        </div>
        <div class="acticlebody">
          <div class="article" v-for="(item,_id) in list" :key="_id">
            <nuxt-link :to="{name:'list-list',params:{list:item._id,title:item.title}}">
              <!-- 骨架屏 -->
              <div class="bodyskeleton" v-show="isshow"></div>
              <div class="articlecont">
                <!-- 文章 -->
                <div class="title">{{item.title}}</div>
                <div class="body">{{item.bodyrender | filter}}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval } from "timers";
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
      this.$axios.get("/blog").then(res => {
        let length = res.data.length;
        if (length <= 4) {
          res.data.map((item, index) => {
            this.list.unshift(item);
          });
        } else {
          this.list = res.data.slice(length - 4, length);
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
  background: rgb(217, 216, 223);
  overflow: hidden;
  opacity: 0.9;
  margin: 0 auto;
}
h2 {
  color: red;
  margin-left: 2rem;
  margin-top: 1rem;
  cursor: pointer;
}
h2 .iconfont {
  color: red;
}
.container {
  display: flex;
  height: 944px;
}
.hidden {
  display: none;
}
/* 骨架屏 */
.skeleton {
  width: 240px;
  height: 160px;
  background: #aaa;
  position: absolute;
}
.bodyskeleton {
  width: 486px;
  height: 151px;
  background: #aaa;
  position: absolute;
}
.pic {
  flex: 3;
  margin-left: 4rem;
}
/* 文章 */
.articleboyd {
  flex: 7;
}
.article {
  font: 8;
  width: 100%;
  display: inline-block;
}
.article a {
  width: 60%;
  height: 200px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
}
.article a .articlecont {
  margin-left: 1rem;
  width:100%;
  color: #444;
  transition: 1s;
}
.article a .articlecont:hover {
  color: rgb(185, 53, 53);
  box-shadow: 10px 10px 10px rgb(87, 73, 163);
}
.img {
  margin-left: 2rem;
  margin-top: 3.6rem;
  flex: 2;
  width: 60%;
  height: 160px;
}
.img img {
  width: 240px;
}
/* 标题 */
.title {
  color: #1e90ff;
  font-weight: 500;
  text-align: center;
  font-size: 1.4rem;
}
/* 内容 */
.body {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  font-size: 18px;
  text-indent: 2rem;
}
</style>