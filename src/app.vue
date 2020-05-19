<template>
  <div>
      {{message}}
     

      <img src="./img/banner.png" alt="">
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
      console.log(utils)

      let arr = utils.add([1,2,3])
      console.log(arr)
    }
  }
</script>