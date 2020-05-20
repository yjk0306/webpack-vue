import './css/index.css'

import Vue from "vue"; // 引入vue
import App from "./app.vue"; // 引入组件App
import router from './router'

new Vue ({
  el: '#app', // 挂载到index.html中的#app上
  router,
  render: h => h (App) // 用App.vue渲染
})