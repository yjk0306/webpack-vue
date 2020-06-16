import VueRouter from 'vue-router'
import Vue from 'vue'
import index from '../page/index.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes:[
    {
      path: '/',
      component : () => import('../page/index.vue')
    }
  ]
})


export default router