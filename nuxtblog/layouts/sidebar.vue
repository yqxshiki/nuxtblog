<template>
  <div id="default">
    <div class="github">
      <a href="https://github.com/yqxshiki" target="_blank">
        <img
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149"
          alt
        />
      </a>
    </div>
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
          <nuxt-link to="/category">Category</nuxt-link>
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
#default {
  width: 100%;
  height: 100%;
}
.wrap {
  display: flex;
  justify-content: space-around;
}
.content a {
  font-weight: 700;
}
.content a:hover {
  border-bottom: 1px solid aqua;
  color: aqua;
 }
.img {
  width: 210px;
  height: 60px;
} 
</style>