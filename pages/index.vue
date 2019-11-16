<template>
  <div id="index">
    <swiper />
    <contact />
    <footer>
      <div class="container">
        <div class="introduce">
          <nuxt-link to="/sitemap">Sitemap</nuxt-link>
        </div>
      </div>
      <div class="keep">
        <span>关于yqxshiki个人网站</span>
        <a href="http://beian.miit.gov.cn/" target="_blank">
          <span>鄂ICP备19027794号</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import swiper from "@/components/swpier";
import contact from "@/components/contact";

export default {
  name: "index",
  components: {
    swiper,
    contact
  }
};
</script>
<style scoped>
#index {
  overflow: hidden;
}
/* 底部 */
footer {
  width: 100%;
  height: 200px;
  background: rgb(53, 77, 77);
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-top: 100px;
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