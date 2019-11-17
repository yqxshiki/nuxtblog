<template>
  <div id="list">
    <div class="wrap">
      <div class="acticle" v-highlight>
        <h1>{{arrlist.title}}</h1>
        <div class="container" v-highlight>
          <div v-html="arrlist.body"></div>
        </div>
        <div class="end">---------------- The End ----------------</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/atelier-cave-light.css";
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});
export default {
  name: "list",
  data() {
    return {
      arrlist: {
        title: "",
        body: ""
      },
      title: this.$route.params.title
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
  },

  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "description", content: "yqxshiki" }]
    };
  }
};
</script>
<style  scoped>
#list {
  margin-top: -1rem;
}
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
  color: #2c3e5036;
  background-image: url("~static/wenzi.jpeg");
  background-clip: text;
  -webkit-background-clip: text;
  animation: change 3s infinite;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  word-break: break-word;
  font-weight: 400;
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
.end {
  color: #aaa;
  text-align: center;
}
</style>