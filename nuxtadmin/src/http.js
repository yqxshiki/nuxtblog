// axios
import axios from 'axios'
import Vue from 'vue'
import router from './router/index'

const http = axios.create({
    baseURL: process.env.VUE_APP_URL || '/api',
})

//请求
http.interceptors.request.use((config) => {
    if (localStorage.ytoken) {
        config.headers.Authorization = 'Bearer ' + (localStorage.ytoken || '')
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});

//响应拦截器
http.interceptors.response.use(res => {
    return res
}, err => {
    // 提示错误信息
    if (err.response.data.message) {
        Vue.prototype.$message({
            type: "error",
            message: err.response.data.message
        })
    }
    if (err.response.status == 401 || err.response.status == 500) {
        router.push('/login')
    }

    return Promise.reject(err);
})

export default http