import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/vant.js'
import './assets/global.css'
import './plugins/element.js'

// 配置请求基础路径
axios.defaults.baseURL = 'http://121.40.200.69/index.php/'
Vue.prototype.axios = axios
// 设置头,添加token
axios.interceptors.request.use(config => {
  config.headers.token = localStorage.getItem('token')
  return config
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 解决各个页面滑动影响，跳转则滑动到顶部
  if (to.path !== '/bookshelf') {
    window.scrollTo(0, 0);
  }
  next()

});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
