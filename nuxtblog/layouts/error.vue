<template>
  <div id="error">
    <h2 v-if="error.statusCode==404">{{error}}404页面不存在</h2>
    <h2 v-else>500服务器错误{{error}}</h2>
    <nuxt-link to="/">回到首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
<style lnag="scss" scoped>
#error {
  width: 100%;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
  margin-top: 5rem;
}
</style>