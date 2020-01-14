<template>
  <div id="default">
    <div class="github">
      <a href="https://github.com/yqxshiki" target="_blank">
        <img
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_green_007200.png?resize=149%2C149"
          alt
        />
      </a>
    </div>
    <header>
      <div class="wrap">
        <div class="content">
          <nuxt-link to="/">Home</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/detail/blog">Bolg</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/">
            <img class="img" src="../static/scrook.png" alt />
          </nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/detail/category">Category</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/detail/withme">Withme</nuxt-link>
        </div>
        <div class="input">
          <div class="search-box">
            <input
              type="text"
              class="search-text"
              v-model="input"
              slot="reference"
              @keyup.enter="click"
              placeholder="请输入搜索内容"
            />
            <a href="#" class="search-btn">
              <i class="iconfont">&#xe64c;</i>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="hidden" ref="hidden">
      <div class="hidden-border">
        <div class="hidden-list" v-for="item in list" :key="item._id">
          <nuxt-link tag="div" :to="{name:'list-list',params:{list:item._id,title:item.title}}">
            <span class="hidden-title">{{item.title}}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      list: []
    };
  },
  methods: {
    async click() {
      this.list = null;
      const res = await this.$axios.post(`/search/${this.input}`);
      if (res.data.length == 0) {
        this.list =[ {
          title: "你搜索的内容不存在，请重新搜索!!!"
        }];
      } else {
        this.list = res.data;
      }
      this.$refs.hidden.style.opacity = 1;
      setTimeout(() => {
        this.$refs.hidden.style.opacity = 0;
      }, 4000);
    }
  }
};
</script>  
<style scoped>
@import '../assets/search.css';
#default {
  width: 100%;
  height: 100vh;
}
.wrap {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.content a {
  font-weight: 700;
  color: #fff;
}
.content a:hover {
  color: aqua;
}
.img {
  width: 240px;
  height: 60px;
  margin-top: 20px;
}

</style>