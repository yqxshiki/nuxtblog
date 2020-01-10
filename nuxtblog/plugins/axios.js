import Vue from 'vue'
import axios from 'axios'
// 设置过时时间
axios.defaults.timeout = 10000;
// axios.defaults.baseURL = "http://localhost:4000/web/api"
axios.defaults.baseURL = "/web/api"

// 挂载在原型上面
Vue.prototype.$axios = axios;


export default ({ $axios, redirect }) => {
    // $axios.defaults.baseURL = "http://localhost:4000/web/api";
    $axios.defaults.baseURL = "/web/api"

    $axios.onRequest((config) => {

    })

    $axios.onResponse((res) => {
        return Promise.resolve(res.data);
    })
}