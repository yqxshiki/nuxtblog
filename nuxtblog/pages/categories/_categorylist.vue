<template>
  <div id="categorylist">
    <div class="container">
      <div class="wrap">
        <h2>
          <span class="title">{{this.$route.params.title}}</span>
          标签
        </h2>
        <div class="list" v-for="item in itemlist" :key="item._id">
          <nuxt-link tag="div" :to="{name:'list-list',params:{list:item._id,title:item.title}}">
            <div class="heard">
              <span class="listdate">{{item.createdAt | date}}</span>
              <span class="listtitle">{{item.title}}</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "categorylist",
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  async asyncData({ $axios, route }) {
    const res = await $axios.get(
      `/web/api/categorylist/${route.params.categorylist}`
    );
    return { itemlist: res };
  }
};
</script>
<style scoped>
#categorylist {
  margin-top: 1rem;
}
.container {
  width: 100%;
  padding: 1rem;
  background: #fff;
}
h2 {
  color: #888;
  text-align: center;
}
.title {
  font-size: 1.2rem;
  color: black;
  font-weight: 700;
}
/* 文章列表 */
.list {
  background: #777;
  width: 100%;
  height: 65px;
  color: black;
  margin-top: 2rem;
}
.heard {
  line-height: 65px;
  cursor: pointer;
  font-size: 0.8rem;
}
.heard:hover {
  color: #ccc;
  font-size: 1.0rem;
}
.listdate {
  margin-left: 2rem;
}
.listtitle {
  margin-left: 4rem;
}
</style>