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
            <p class="hidden">{{list.length>index?item.imgsrc:item.imgsrc=""}}</p>
            <img class="noneimg" alt :src="item.imgsrc" />
          </div>
        </div>
        <div class="acticlebody">
          <div class="article" v-for="(item,_id) in list" :key="_id">
            <nuxt-link :to="{name:'list-list',params:{list:item._id,title:item.title}}">
              <!-- 文章 -->
              <div class="articlecont">
                <div class="title">{{item.title}}</div>
                <div class="body">{{item.body | filter}}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hot",
  data() {
    return {
      arrimg: [],
      list: []
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
      this.axios.get("http://49.232.96.54:4000/api/blog").then(res => {
        let length = res.data.length;
        if (length <= 5) {
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
      this.axios
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
      console.log(img);
      for (let i = 0; i < img.length; i++) {
        const item = img[i];
        if (item.currentSrc == "") {
          console.log(item.parentNode);
          item.parentNode.style.display = "none";
        }
      }
    }
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
  width: 100%;
  height: 100%;
  background: rgb(217, 216, 223);
  overflow: hidden;
  opacity: 0.9;
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
}
.hidden {
  display: none;
}
.pic {
  flex: 2;
  margin-left: 2rem;
}
.articleboyd {
  flex: 8;
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
  transition: 1s;
  cursor: pointer;
  border-radius: 1rem;
}
.article a .articlecont {
  margin-left: 1rem;
  height: 160px;
  color: #444;
}
.articlecont:hover {
  color: #5b3eac;
}
.img {
  margin-left: 2rem;
  margin-top: 3.4rem;
  flex: 2;
  width: 60%;
  height: 160px;
}
.img img {
  width: 240px;
}
.title {
  color: #1e90ff;
  font-weight: 500;
  text-align: center;
  font-size: 1.4rem;
}
.body {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  font-size: 18px;
  text-indent: 2rem;
}
</style>