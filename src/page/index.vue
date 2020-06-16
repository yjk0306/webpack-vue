<template>
  <div>
    <!-- <h1>index</h1>
     <el-button type="primary" @click="add">+++</el-button>
     <el-button type="primary">---</el-button>
    <img src="../img/banner.png" alt=""> -->
    <Fdialog title="newtitle" show="myshow" :flag="flag" @say="say" />
  </div>
</template>
<script>
import _ from 'lodash'
import Fdialog from '@/component/Fdialog'
export default {
    data () {
      return {
        flag: false
      }
    },
    created () {
      
    },
    mounted () {
      
    },
    components: {
      Fdialog
    },
    methods: {
      add () {
        console.log(this)
      },
      say () {
        console.log('say')
      }
    }
}
</script>
<style lang="" scoped>
  
</style>