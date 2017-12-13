// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import A from './views/A.vue'
import B from './views/B.vue'
import C from './views/C.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:A
        },
        {
            path:'/A',
            component:A
        },
        {
            path:'/B',
            component:B
        },
        {
            path:'/C',
            component:B
        },
    ]
})