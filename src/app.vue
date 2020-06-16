<template>
  <div>
    <h1>hello</h1>
    <router-view></router-view>
  </div>
</template>
<script>
import utils  from './utils/index'
import Vue from 'vue'
  export default {
    name: 'app',
    data () {
      return {
        message:'hello myboy'
      } 
    },
    mounted () {
      let _this = this;
      let arr = utils.add([1,2,3])
      var db;
      var request = indexedDB.open("store");
      request.onerror = function(event) {
        alert("Why didn't you allow my web app to use IndexedDB?!");
      };
      request.onsuccess = function(event) {

        db = event.target.result;
       _this.$db = db
      };
    }
  }
</script>