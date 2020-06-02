import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/appnav', component: resolve => require(['../views/AppnavContainer.vue'], resolve),
    redirect: '/bookshelf',
    children: [
      { path: '/bookshelf', component: resolve => require(['../views/BookshelfContainer.vue'], resolve) },
      { path: '/selected', component: resolve => require(['../views/SelectedContainer.vue'], resolve) },
      { path: '/find', component: resolve => require(['../views/FindContainer.vue'], resolve) },
      {
        path: '/mine', component: resolve => require(['../views/MineContainer.vue'], resolve), meta: {
          keepAlive: true
        }
      }
    ]
  },
  { path: '/search', component: resolve => require(['../views/SearchContainer.vue'], resolve) },
  { path: '/read', component: resolve => require(['../views/ReadContainer.vue'], resolve) },
  { path: '/detail', component: resolve => require(['../views/DetailContainer.vue'], resolve) },
  { path: '/bookteam', component: resolve => require(['../views/BookteamContainer.vue'], resolve) },
  { path: '/rank', component: resolve => require(['../views/RankContainer.vue'], resolve) },
  { path: '/login', component: resolve => require(['../views/LoginContainer.vue'], resolve) },
  { path: '/classify', component: resolve => require(['../views/ClassifyContainer.vue'], resolve) }
]

const router = new VueRouter({
  routes

})


export default router
