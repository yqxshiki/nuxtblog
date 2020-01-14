<template>
  <div>
    <h2 v-if="error.statusCode==404">404页面不存在</h2>
    <h2 v-else>500服务器错误</h2>
    <nuxt-link to="/"></nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
<style>
</style>