import VueLazyLoad from 'vue-lazyload'

import Vue from 'vue'

Vue.use(VueLazyLoad, {
    error: require("../static/error.jpg"),
    loading: require('../static/loading.gif'),
    attempt: 2
})