<template>
  <div id="blog">
    <div class="container">
      <div class="list" v-for="item in list" :key="item.index">
        <div class="title">
          <nuxt-link :to="'/list/'+item._id">{{item.title}}</nuxt-link>
        </div>
        <!-- <div class="time">2018-01-11T10:00:57.520Z</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  methods: {
    getlist() {
      this.axios.get("http://49.232.96.54:4000/api/blog").then(res => {
        this.list = res.data;
      });
    }
  },
  mounted() {
    this.getlist();
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* 文章 */
.list {
  width: 750px;
  height: 200px;
  box-shadow: 5px 5px 5px 5px #fff;
  margin-top: 1rem;
  padding: 1rem;
  background: rgb(217, 216, 223);
  display: flex;
  justify-content: center;
  align-items: center;
}
.list:hover {
  box-shadow: 5px 5px 30px 5px #ccc;
}
.list div {
  margin-top: 1rem;
}
/* 标题 */
.title a {
  border-bottom: 2px solid black;
  font-size: 24px;
  font-weight: bolder;
  color: #2c3e5036;
  background-image: url("~static/wenzi.jpeg");
  background-clip: text;
  -webkit-background-clip: text;
  animation: change 3s infinite;
}
@keyframes change {
  0% {
    background-position: left 0 top 0px;
  }

  100% {
    background-position: left 800px top 0px;
  }
}
/* 发布时间 */
.time {
  font-size: 0.8rem;
  color: #ccc;
}
</style>