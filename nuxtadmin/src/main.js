import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ElementUI
import ElementUI, { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// axios
import http from './http'
Vue.prototype.$axios = http;

// markdown
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.component("mavonEditor", mavonEditor)
// Loading
import myloading from './views/loading.vue'
Vue.component("myloading", myloading)

Vue.config.productionTip = false

import animate from 'animate.css'
Vue.use(animate)
// 混入
Vue.mixin({
  computed: {
    uploadUrl() {
      return process.env.NODE_ENV == 'production' ? '/api/uploads' : 'http://localhost:4000/api/uploads'
    },
    // 请求头
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.ytoken || ""}`
      };
    },
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