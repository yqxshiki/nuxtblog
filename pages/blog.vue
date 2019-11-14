<template>
  <div id="blog">
    <div class="container">
      <div class="list" v-for="item in list" :key="item.index">
        <div class="title">
          <nuxt-link :to="'/list/'+item._id">{{item.title}}</nuxt-link>
        </div>
        <div class="time">2018-01-11T10:00:57.520Z</div>
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
      this.axios.get("http://localhost:4000/api/blog").then(res => {
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
  box-shadow: 0 1px 1px black;
  margin-top: 1rem;
  padding: 1rem;
}
.list:hover {
  box-shadow: 5px 5px 40px 5px #ccc;
}
.list div {
  margin-top: 1rem;
}
/* 标题 */
.title a {
  border-bottom: 1px solid black;
  font-size: 24px;
  font-weight: bolder;
  color: black;
}
/* 发布时间 */
.time {
  font-size: 0.8rem;
  color: #ccc;
}
</style>