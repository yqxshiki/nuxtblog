import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:"/display",
    children: [
      // 展示文章
      {
        path: '/display',
        name: 'display',
        component: () => import("../components/display.vue")
      },
      // 创建文章
      {
        path: '/create',
        name: 'create',
        component: () => import("../components/create.vue")
      },
      // 修改文章
      {
        path: '/resive/:id',
        name: 'resive',
        component: () => import("../components/resive.vue")
      }
    ]
  },
  { path: "*", redirect: "/error", hidden: true }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
