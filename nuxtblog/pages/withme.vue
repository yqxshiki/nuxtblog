<template>
  <div id="withme">
    <div class="about" v-html="item.aboutrender"></div>
  </div>
</template>

<script>
export default {
  // transition: "withme",
  head() {
    return {
      title: "关于我",
      meta: [{ hid: "description", name: "withme", content: "withme" }]
    };
  },
  data() {
    return {
      item: {
        about: ""
      }
    };
  },
  computed: {
    async getabout() {
      const res = await this.$axios.get("/user/info");
      this.item = res.data[0];
    }
  },
  created() {
    this.getabout;
  }
};
</script>
<style scoped>
#withme {
  background: #eee;
  margin-top: 1rem;
  width: 90%;
}
.about {
  width:750px;
  padding: 1rem;
}
</style>
