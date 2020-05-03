<template>
  <div id="swiper">
    <el-carousel :interval="3000" type="card" :class="getSkeleton=='img'?'skeleton':' '">
      <el-carousel-item v-for="itmes in imgsrc" :key="itmes.index">
        <img v-lazy="itmes.url" :alt="itmes.image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "swiper",
  data() {
    return {
      imgsrc: "",
      getSkeleton: "img"
    };
  },
  computed: {
    async getimg() {
      const res = await this.$axios.get("/imglist");
      this.imgsrc = res.data[0].items;
    }
  },
  created() {
    setTimeout(() => {
      this.getimg;
      this.getSkeleton = "";
    }, 500);
  }
};
</script>
<style scoped>
@media screen and (max-width: 600px) {
  #swiper {
    display: none;
  }
}
.skeleton {
  width: 80%;
  margin: 0 auto;
  background: #ccc;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
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