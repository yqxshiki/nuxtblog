<template>
  <div id="categorylist">
    <div class="container">
      <div class="wrap">
        <h2>
          <span class="title">{{this.$route.params.title}}</span>
          标签
        </h2>
        <div class="list" v-for="item in list" :key="item._id">
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
import dayjs from 'dayjs'
export default {
  name: "categorylist",
  data() {
    return {
      list: []
    };
  },
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  methods: {
    async getblog(id) {
      const res = await this.$axios.get(`/categorylist/${id}`);
      this.list = res.data;
      console.log(this.list);
    }
  },
  mounted() {
    this.getblog(this.$route.params.categorylist);
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
  background: #ccc;
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
}
.heard:hover {
  color: #ccc;
  font-size: 1.1rem;
}
.listdate {
  margin-left: 2rem;
}
.listtitle {
  margin-left: 4rem;
}
</style>