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

Vue.config.productionTip = false

// 混入
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$axios.defaults.baseURL + '/upload'
    }
  },
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')