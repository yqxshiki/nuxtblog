import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// axios
import axios from './http'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

// 混入
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.axios.defaults.baseURL + 'upload'
    }
  },
})

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')