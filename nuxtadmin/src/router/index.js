import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect: "/displaylist",
  children: [
    // 展示文章
    {
      path: '/displaylist',
      name: 'displaylist',
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
      props: true,
      component: () => import("../components/create.vue")
    },
    // 类别信息
    {
      path: '/categories/create',
      component: () => import('../components/CategoryEdit.vue')
    },
    {
      path: '/categories/edit/:id',
      component: () => import('../components/CategoryEdit.vue'),
      props: true
    },
    {
      path: '/categories/list',
      component: () => import('../components/CategoryList.vue')
    },
      //用户信息
      {
        path: '/users/create',
        component: () => import('../components/UsersEdit.vue')
      },
      {
        path: '/users/edit/:id',
        component: () => import('../components/UsersEdit.vue'),
        props: true
      },
      {
        path: '/users/list',
        component: () => import('../components/UsersList.vue')
      },
  ]
},
{
  path: "*",
  redirect: "/error",
  hidden: true
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router