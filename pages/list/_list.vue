<template>
  <div id="list">
    <div class="wrap">
      <div class="acticle" v-for="item in listarray" :key="item.index">
        <h1>{{item.title}}</h1>
        <div class="container">
          <p>{{item.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "list",
  date() {
    return {};
  },
  asyncData() {
    return axios
      .get(
        "https://www.fastmock.site/mock/27daaace66e047350e2beff518943c0f/nuxt/list"
      )
      .then(res => {
        return { listarray: res.data.data };
      });
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* 文章 */
.acticle {
  width: 750px;
  height: 200px;
  margin-top: 1rem;
  padding: 1rem;
}
.container p {
  text-indent: 2rem;
}
</style>