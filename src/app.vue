<template>
  <div>
    <h1>app</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import utils  from './utils/index'
  export default {
    name: 'app',
    data () {
      return {
        message:'hello myboy'
      } 
    },
    mounted () {
      let arr = utils.add([1,2,3])
    }
  }
</script>