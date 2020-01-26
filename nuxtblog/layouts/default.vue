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
      <div class="nav-menu">
        <label for="nav" class="iconfont">
          <i class="iconfont anniu">&#xe671;</i>
        </label>
      </div>
      <input @click="inputclick" ref="input" type="checkbox" id="nav" />
      <div class="wrap">
        <div class="content home">
          <nuxt-link to="/">
            <!-- <img class="img" src="../static/scrook.png" alt /> -->
            Scrook.Blog
          </nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/">Home</nuxt-link>
        </div>
        <div class="content">
          <nuxt-link to="/detail/blog">Bolg</nuxt-link>
        </div>
        <!-- <div class="content">
          <nuxt-link to="/detail/category">Category</nuxt-link>
        </div>-->
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
              <i class="iconfont sousu">&#xe64c;</i>
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
        this.list = [
          {
            title: "你搜索的内容不存在，请重新搜索!!!"
          }
        ];
      } else {
        this.list = res.data;
      }
      this.$refs.hidden.style.opacity = 1;
      setTimeout(() => {
        this.$refs.hidden.style.opacity = 0;
      }, 4000);
    },
    inputclick() {
      let list = document.querySelectorAll(".content");
      list = Array.from(list);
      list.map(i => {
        if (this.$refs.input.checked) {
          i.style.display = "block";
        } else {
          i.style.display = "none";
        }
      });
    }
  }
};
</script>  
<style scoped lang="scss">
@import "../assets/search.css";
@media screen and(min-width:901px) {
  #default {
    width: 100%;
    height: 100vh;
    #nav {
      display: none;
    }
    .anniu {
      display: none;
    }
    .wrap {
      width: 60%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      .home {
        font-size: 30px;
        font-weight: normal;
        font-family: "Lobster Two", "Monda", "PingFang SC", "Microsoft YaHei",
          sans-serif;
      }
      .content {
        a {
          font-weight: 700;
          color: #fff;
        }
        &.a:hover {
          color: aqua;
        }
      }
      .img {
        width: 240px;
        height: 60px;
        margin-top: 20px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  header {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    height: auto;
    .nav-menu {
      font-size: 2rem;
      line-height: 100px;
    }
    input {
      display: none;
    }

    .wrap {
      flex: 3;
      width: 100%;
      display: flex;
      flex-direction: column;
      .content {
        margin: 0.4rem;
        display: none;

        a {
          color: #fff;
        }
      }
      img {
        display: none;
      }
    }
  }
  .github,
  .input {
    display: none;
  }
}
</style>