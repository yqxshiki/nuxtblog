import Vue from 'vue'
import App from './App.vue'
import router from './router'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// axios
import axios from 'axios'
Vue.prototype.axios = axios;
axios.defaults.timeout = 30000;
axios.defaults.baseURL = "http://localhost:4000/api";
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')