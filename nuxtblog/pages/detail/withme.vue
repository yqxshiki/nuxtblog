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
      title: "关于我-Scrook博客",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "withme", content: "withme-Scrook博客" }
      ]
    };
  },
  data() {
    return {
      item: ""
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.get("/user/info");
    return { item: res[0] };
  }
  // methods: {
  //   async get_userinfo() {
  //     const res = await this.$axios.get("/user/info");
  //     this.item = res.data[0];
  //   }
  // },
  // created() {
  //   this.get_userinfo();
  // }
};
</script>
<style scoped>
#withme {
  background: #fff;
  /* margin-top: 1rem; */
  width: 90%;
}
.about {
  width: 750px;
  padding: 1rem;
}
</style>
