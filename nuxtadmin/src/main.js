import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// axios
import http from './http'
Vue.prototype.$axios = http;

// markdown
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.component("mavonEditor", mavonEditor)
Vue.config.productionTip = false


// 混入
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$axios.defaults.baseURL + '/uploads'
    }
  },
  methods: {
    // 添加图片
    async $imgAdd(pos, $file) {
      var formdata = new FormData();
      formdata.append("file", $file);
      const res = await this.$axios.post("/uploads", formdata);
      this.$refs.md.$img2Url(pos, res.data.url);
    },
  },
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')