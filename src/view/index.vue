<template>
  <div>
    <h1>{{title}}</h1>
    <Hello />
    <img src="../img/banner.png" alt="">
  </div>
</template>
<script>
import Hello from '@template/hello'
export default {
  data () {
    return {
      title: 'index'
    }
  },
    components:{
      Hello
    },
    // data () {
    //   return {
    //     // name: 'hello  vue'
    //   }
    // }
}
</script>
<style  scoped>
  h1{
    color: blue;
  }
</style>