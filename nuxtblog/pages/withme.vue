<template>
  <div id="withme">
    <div class="about" v-html="item.aboutrender"></div>
  </div>
</template>

<script>
export default {
  name: "withme",
  head() {
    return {
      title: "关于我",
      meta: [{ hid: "description", name: "withme", content: "withme" }]
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.get("/user/info");
    return { item: res[0] };
  }
};
</script>
<style scoped>
#withme {
  background: #fff;
  margin-top: 1rem;
  width: 90%;
}
.about {
  width: 750px;
  padding: 1rem;
}
</style>
