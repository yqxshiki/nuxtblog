<template>
  <div id="categorylist">
    <div class="container">
      <div class="wrap">
        <h2>
          <span class="title">{{this.$route.params.title}}</span>
          标签
        </h2>
        <el-timeline>
          <el-timeline-item
            v-for="item in itemlist"
            :key="item._id"
            :timestamp="item.createdAt | date"
            placement="top"
          >
            <el-card>
              <nuxt-link tag="div" :to="{name:'detail-list-list',params:{list:item._id,title:item.title}}">
                <h4>{{item.title}}</h4>
              </nuxt-link>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "categorylist",
  data() {
    return {
      setbottomtime: ""
    };
  },
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  async asyncData({ $axios, route }) {
    const res = await $axios.get(`/categorylist/${route.params.categorylist}`);
    return { itemlist: res };
  },
};
</script>
<style scoped>
#categorylist {
  width: 80%;

}
.container {
  width: 80%;
  padding: 1rem;
  background: #fff;
  margin: 0 auto;
}
h2 {
  color: #888;
  text-align: center;
}
h4 {
  cursor: pointer;
}
.title {
  font-size: 1.2rem;
  color: black;
  font-weight: 700;
}
ul li {
  list-style: none;
}
</style>