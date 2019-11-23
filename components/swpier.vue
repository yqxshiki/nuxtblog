<template>
  <div id="swiper">
    <el-carousel :interval="3000" type="card" height="300px">
      <el-carousel-item v-for="itmes in imgsrc" :key="itmes.index">
        <img :src="itmes.imgSrc" alt class="medium" />
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
    getsrc() {
      this.axios
        .get(
          "https://www.fastmock.site/mock/f7e7b8434e7952ee812e847cda9fd3e7/music/url"
        )
        .then(res => {
          this.imgsrc = res.data.data.swiperList;
        });
    }
  },
  mounted() {
    this.getsrc;
  }
};
</script>
<style scoped>
#swiper {
  width: 80%;
  margin: 0 auto;
}
@media screen and (min-width: 1360px) {
  img {
    width: 100%;
    height: 300px;
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