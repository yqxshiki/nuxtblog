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
    //管理员
    {
      path: '/admin/create',
      component: () => import('../components/AdminEdit.vue')
    },
    {
      path: '/admin/edit/:id',
      component: () => import('../components/AdminEdit.vue'),
      props: true
    },
    {
      path: '/admin/list',
      component: () => import('../components/AdminList.vue')
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
    //轮播图
    {
      path: '/img/create',
      component: () => import('../components/ImgEdit.vue')
    },
    {
      path: '/img/edit/:id',
      component: () => import('../components/ImgEdit.vue'),
      props: true
    },
    {
      path: '/img/list',
      component: () => import('../components/ImgList.vue')
    },
    //工具
    {
      path: '/tools/create',
      component: () => import('../components/ToolsEdit.vue')
    },
    {
      path: '/tools/edit/:id',
      component: () => import('../components/ToolsEdit.vue'),
      props: true
    },
    {
      path: '/tools/list',
      component: () => import('../components/ToolsList.vue')
    },
    //友情链接
    {
      path: '/fslinks/create',
      component: () => import('../components/FslinksEdit.vue')
    },
    {
      path: '/fslinks/edit/:id',
      component: () => import('../components/FslinksEdit.vue'),
      props: true
    },
    {
      path: '/fslinks/list',
      component: () => import('../components/FslinksList.vue')
    },
  ]
},
{
  path: '/login',
  name: "login",
  component: () => import('../components/Login.vue'),
  meta: {
    isPublic: true
  }
},
{
  path: "*",
  redirect: "/",
  hidden: true
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.ytoken) {
    next('/login');
  }
  next();
})
export default router