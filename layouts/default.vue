<template>
  <div>
    <header>
      <div class="wrap">
        <div class="content">
          <nuxt-link to="/">Home</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/blog">Bolg</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/">
            <img class="img" src="../static/logo2.png" alt />
          </nuxt-link>
        </div>
        <div class="content">
          <a href="#">English</a>
        </div>
        <div class="content">
          <a href="#">Chinese</a>
        </div>
      </div>
    </header>
    <nuxt />
    <footer>
      <div class="container">
        <div class="introduce">
          <nuxt-link to="/sitemap">Sitemap</nuxt-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 头部 */
header {
  width: 100%;
  height: 100px;
  margin-top: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
}
.wrap {
  display: flex;
  justify-content: space-around;
}
.img {
  width: 210px;
  height: 60px;
  margin-top: -20px;
}
/* 底部 */
footer {
  width: 100%;
  height: 200px;
  background: rgb(227, 242, 237);
  display: flex;
  justify-content: center;
  align-items: center;
}

.introduce {
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  color: #aaa;
}
.introduce:hover {
  color: #ccc;
}
</style>
