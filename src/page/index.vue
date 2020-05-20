<template>
  <div>
    <h1>index</h1>
    <Hello />
    <img src="../img/banner.png" alt="">
  </div>
</template>
<script>
import Hello from '@template/hello'
export default {
    components:{
      Hello
    }
}
</script>
<style  scoped>
  h1{
    color: blue;
  }
</style>