import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/appnav' },
  {
    path: '/appnav', component: resolve => require(['../views/AppnavContainer.vue'], resolve),
    redirect: '/bookshelf',
    children: [
      { path: '/bookshelf', component: resolve => require(['../views/BookshelfContainer.vue'], resolve) },
      { path: '/selected', component: resolve => require(['../views/SelectedContainer.vue'], resolve) },
      { path: '/find', component: resolve => require(['../views/FindContainer.vue'], resolve) },
      { path: '/mine', component: resolve => require(['../views/MineContainer.vue'], resolve) }
    ]
  },
  { path: '/search', component: resolve => require(['../views/SearchContainer.vue'], resolve) }
]

const router = new VueRouter({
   routes
 
})


export default router
