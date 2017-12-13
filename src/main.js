import Config from './config.js'//自定义配置文件
import Vue from 'vue'
import router from './routes.js'//录用安装配置
import store from './store';//vuex安装配置
import filter from './filter'//过滤器安装配置

import App from './views/App.vue'//应用主组件

Vue.config.debug = true;//开启错误提示


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
