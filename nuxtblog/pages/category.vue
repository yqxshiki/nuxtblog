<template>
  <div id="category">
    <div class="container">
      <h2>文章标签</h2>
      <h4>
        目前共计
        <span class="length">{{length}}</span>个标签
      </h4>
      <div class="category">
        <div class="list" v-for="item in categories" :key="item._id">
          <nuxt-link
            tag="div"
            :to="{name:'categories-categorylist',params:{categorylist:item._id,title:item.name}}"
          >
            <span class="name">{{item.name}}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "category",
  data() {
    return {
      //   标签总数
      length: ""
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.get("/web/api/category");
    return { categories: res.slice(6, res.length) };
  },
  methods: {
    setstyle() {
      this.length = this.categories.length;
      let list = document.querySelectorAll(".list");
      list = Array.from(list);
      let arr = [];
      arr.push(this.getRandom(this.length));
      arr.push(this.getRandom(this.length));
      if (arr[0] == arr[1]) {
        if (arr[1] > this.length) {
          arr[1] = arr[1] - 1;
        }
        if (arr[1] < 0) {
          arr[1] = arr[1] + 1;
        }
      }
      list[arr[0]].className = "redlist";
      list[arr[1]].className = "redlist";
    },
    // 获取随机数
    getRandom(y) {
      return Math.floor(Math.random() * y);
    }
  },
  mounted() {
    let times = setInterval(() => {
      if (this.categories !== undefined) {
        this.setstyle();
        clearInterval(times);
      }
    }, 1000);
  },
  head() {
    return {
      title: "Category",
      meta: [{ hid: "description", name: "Category", content: "Category" }]
    };
  }
};
</script>
<style scoped>
#category {
  margin-top: 1rem;
}
.container {
  width: 90%;
  text-align: center;
  padding: 1rem;
  background: #ccc;
}
.length {
  font-size: 1.1rem;
  font-weight: 400;
  color: red;
}
.category {
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin: 0 auto;
}
.name {
  font-size: 1.2rem;
}

.list {
  border-bottom: 3px solid #888;
  margin-left: 3rem;
  margin-top: 2rem;
  cursor: pointer;
  color: #888;
}
.list:hover {
  color: #222;
  border-bottom: 3px solid #222;
}
.redlist {
  border-bottom: 3px solid red;
  margin-left: 3rem;
  margin-top: 2rem;
  cursor: pointer;
  color: red;
}
.redlist:hover {
  color: rgb(189, 82, 82);
  border-bottom: 3px solid rgb(189, 82, 82);
}
</style>