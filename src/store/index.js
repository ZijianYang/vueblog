import Vue from 'vue'
import Vuex from 'vuex'
import Config from '../config.js'//自定义配置文件
import Ajax from '../api/ajax.js'//api即数据请求
import * as actions from './actions'
import * as getters from './getters'
import imagelist from './modules/imagelist'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)


Vue.use(Ajax, {
    baseURL: Config.apiUrl
})

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions,
  getters,
  modules: {
    imagelist,
    cart,
    products
  },
})


