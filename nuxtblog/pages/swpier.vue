<template>
  <div id="swiper">
    <el-carousel :interval="3000" type="card" height="340px">
      <el-carousel-item v-for="itmes in imgsrc" :key="itmes.index">
        <img :src="itmes.url" :alt="itmes.image" class="medium" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
      imgsrc: ""
    };
  },
  computed: {
    async getimg() {
      const res = await this.$axios.get("/imglist");
      this.imgsrc = res.data[0].items;
    }
  },
  created() {
    this.getimg;
  }
};
</script>
<style scoped>
@media screen and (min-width: 1360px) {
  img {
    width: 100%;
    height: 340px;
  }
}
/* element-ui样式 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>