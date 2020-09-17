import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)


const router = new Router({
  mode: 'hash',
  routes:[
    {
      path: '/index',
      component : () => import('../view/index.vue')
    }
  ]
})


export default router