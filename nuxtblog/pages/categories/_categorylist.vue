<template>
  <div id="categorylist">
    <div class="container">
      <div class="wrap">
        <h2>
          <span class="title">{{this.$route.params.title}}</span>
          标签
        </h2>
        <!-- <div class="list" v-for="item in itemlist" :key="item._id">
          <nuxt-link tag="div" :to="{name:'list-list',params:{list:item._id,title:item.title}}">
            <div class="heard">
              <span class="listdate">{{item.createdAt | date}}</span>
              <span class="listtitle">{{item.title}}</span>
            </div>
        </div>-->

        <el-timeline>
          <el-timeline-item
            v-for="item in itemlist"
            :key="item._id"
            :timestamp="item.createdAt | date"
            placement="top"
          >
            <el-card>
              <nuxt-link tag="div" :to="{name:'list-list',params:{list:item._id,title:item.title}}">
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