<template>
  <div id="index">
    <div class="center">
      <swiper />
      <hotacticle />
      <contact />
    </div>
    <footer>
      <div class="keep">
        <span>关于yqxshiki个人网站</span>
        <a href="http://beian.miit.gov.cn/" target="_blank">
          <span>鄂ICP备19027794号</span>
        </a>
        <div style="width:300px;margin:0 auto; padding:20px 0;">
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011602000714"
            style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
          >
            <img src="../static/beian.png" style="float:left;" />
            <p
              style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
            >鄂公网安备 42011602000714号</p>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import swiper from "@/pages/swpier";
import contact from "@/pages/contact";
import hotacticle from "@/pages/hot";
export default {
  layout: "sidebar",
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