import Router from 'vue-router'
import Vue from 'vue'
import index from '../page/index.vue'
Vue.use(Router)


const router = new Router({
  mode: 'hash',
  routes:[
    {
      path: '/index',
      component : () => import('../page/index.vue')
    }
  ]
})


export default router