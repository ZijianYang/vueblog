// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import listPage from './views/ImageList.vue'
import detailPage from './views/detail.vue'
import ShoppingCartPage from './views/ShoppingCart.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:listPage
        },
        {
            path:'/detail',
            component:detailPage
        },
        {
            path:'/shoppingCart',
            component:ShoppingCartPage
        },
    ]
})