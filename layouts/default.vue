<template>
  <div id="default">
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
            <img class="img" src="../static/scrook.png" alt />
          </nuxt-link>
        </div>
        <div class="content">
          <a href="#">English</a>
        </div>
        <div class="content">
          <nuxt-link to="/withme">Withme</nuxt-link>
        </div>
      </div>
    </header>
    <nuxt />
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
.content a:hover {
  border-bottom: 1px solid aqua;
  color: aqua;
}
.img {
  width: 210px;
  height: 60px;
  margin-top: -20px;
}
a {
  color: #fff;
}
</style>
