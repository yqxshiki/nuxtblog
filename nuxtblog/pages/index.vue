<template>
  <div id="index">
    <div class="center">
      <swiper />
      <hotacticle />
      <contact />
    </div>
    <footer>
      <div class="keep">
        <!-- 这里是底部栏，自己添加想要的信息 -->
      </div>
    </footer>
  </div>
</template>

<script>
import swiper from "@/pages/swpier";
import contact from "@/pages/contact";
import hotacticle from "@/pages/hot";
export default {
  layout: "default",
  name: "index",
  components: {
    swiper,
    contact,
    hotacticle
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      });
    });
  }
};
</script>
<style scoped>
#index {
  width: 100%;
  /* height: 100%; */
  margin-top: 3rem;
}
.center {
  width: 100%;
  margin: 0 auto;
}
/* 底部 */
footer {
  width: 100%;
  background: rgb(53, 77, 77);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
footer::before {
  background: #000
    linear-gradient(
      to left,
      #4cd964,
      #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55
    );
  content: "";
  height: 8px;
  position: absolute;
  top: -2%;
  width: 100%;
}
.introduce {
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  color: #000;
}
.introduce:hover {
  color: #000;
}
.keep {
  color: #000;
  margin-top: 40px;
  margin-left: 40px;
}
.keep a {
  color: #000;
}
.keep a :hover {
  color: aqua;
  border-bottom: 1px solid aqua;
}
</style>