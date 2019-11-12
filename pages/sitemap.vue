<template>
  <div id="sitemap">
    <div class="wrap">
      <div class="container">
        <h2>Sitemap</h2>
        <div>
          <ul>
            <li>
              <nuxt-link to>Blog</nuxt-link>
              <ul>
                <li>
                  <nuxt-link to>My first article</nuxt-link>
                </li>
                <li>
                  <nuxt-link to>My second article</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}
</style>