<template>
  <div id="list">
    <div class="wrap">
      <div class="acticle">
        <h1>{{arrlist.title}}</h1>
        <div class="container">
          <div v-html="arrlist.body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      arrlist: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    getblog(list) {
      this.axios.get("http://localhost:4000/api/blog/" + list).then(res => {
        this.arrlist = res.data;
      });
    }
  },
  mounted() {
    this.getblog(this.$route.params.list);
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* 文章 */
.acticle {
  width: 750px;
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 2px 2px 2px 2px #aaa;
}
.acticle:hover {
  box-shadow: 4px 4px 4px 4px #ccc;
}
h1 {
  margin-left: 25%;
}
.container p {
  text-indent: 2rem;
}
</style>