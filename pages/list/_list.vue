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
      this.axios.get("http://49.232.96.54:4000/api/blog/" + list).then(res => {
        this.arrlist = res.data;
      });
    }
  },
  mounted() {
    this.getblog(this.$route.params.list);
  }
};
</script>
<style  scoped>
a {
  color: black;
}
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
  background: rgb(217, 216, 223);
}
.acticle:hover {
  box-shadow: 4px 4px 4px 4px #ccc;
}
h1 {
  width: 100%;
  color: #2c3e5036;
  background-image: url("~static/wenzi.jpeg");
  background-clip: text;
  -webkit-background-clip: text;
  animation: change 3s infinite;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
@keyframes change {
  0% {
    background-position: left 0 top 0px;
  }

  100% {
    background-position: left 800px top 0px;
  }
}
.container p {
  text-indent: 2rem;
}
</style>