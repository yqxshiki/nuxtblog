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
            <el-tag :type="item.type" class="name">{{item.name}}</el-tag>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  mounted() {
    this.length = this.categories.length;
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
  background: #fff;
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
  margin-left: 3rem;
  margin-top: 2rem;
  cursor: pointer;
  box-sizing: border-box;
}
</style>