import Vue from 'vue'
import axios from 'axios'
// 挂载在原型上面
Vue.prototype.axios = axios;
// 设置过时时间
axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://localhost:4000/api";
