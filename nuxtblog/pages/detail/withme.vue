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
  data() {
    return {
      setbottomtime: ""
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.get("/user/info");
    return { item: res[0] };
  },
  // methods: {
  //   setbottom() {
  //     let body = window.screen.availHeight;
  //     let footer = document.getElementsByTagName("footer")[0];
  //     let container = document.getElementsByClassName("container")[0]
  //       .offsetHeight;
  //     footer.style.marginTop = body - container - 180 + "px";
  //   }
  // },
  // mounted() {
  //   this.setbottomtime="";
  //   this.setbottomtime = setInterval(() => {
  //     this.setbottom();
  //   }, 500);
  // },
  // watch: {
  //   $route: function() {
  //     clearInterval(this.setbottomtime);
  //     let footer = document.getElementsByTagName("footer")[0];
  //     footer.style.marginTop = 0 + "px";
  //   }
  // }
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
