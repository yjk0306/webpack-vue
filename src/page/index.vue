<template>
  <div>
    <!-- <h1>index</h1>
     <el-button type="primary" @click="add">+++</el-button>
     <el-button type="primary">---</el-button>
    <img src="../img/banner.png" alt=""> -->
    <Fdialog title="newtitle" show="myshow" :flag="flag" @say="say" />
    <button @click="open">点击</button>
     <button @click="local">定位</button>
    <h1>
      位置 {{location.lng}} --{{location.lat}}
    </h1>
    <button v-on:click="get">请求</button>
  </div>  
</template>
<script>
import _ from 'lodash'
import Fdialog from '@/component/Fdialog'
import { $get } from '../utils/axios'
export default {
    data () {
      return {
        flag: false,
        location: {
          lng :'',
          lat: ''
        }
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
      get () {
        $get('http://10.52.0.21:5000/index',
           {
             user: 'admin',
             pass: 123
           }
        
        )
        .then(res=>{
          console.log(res,111)

        })
        .then(res=>{
          console.log(res,222)
        })

      },
      
      local () {
        	// 百度地图API功能
        var map = new BMap.Map("allmap");
        let that = this
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          console.log(r.point)
          that.location = r.point
          console.log(that.location)
          // if(this.getStatus() == BMAP_STATUS_SUCCESS){
          //   var mk = new BMap.Marker(r.point);
          //   map.addOverlay(mk);
          //   map.panTo(r.point);
          //   alert('您的位置：'+r.point.lng+','+r.point.lat);
          // }
          // else {
          //   alert('failed'+this.getStatus());
          // }        
        },{enableHighAccuracy: true})
      },
      open () {
        this.$dialog({
          title: 'dialog',
          content: 'content',
          confirmCB (fn) {
            this.close()
          },
          cancelCB (res) {
            console.log(res,'cb')
          }
        })
      },
      add () {
       
      },
      say () {
      },
      fn (n, k) {
        let res = []
        function sum (index, arr) {
          
        }
        if (n > k) {
          return []
        } else {
          sum(0,[])
        }
        
        return res
      }
    }
}
</script>
<style lang="" scoped>
  
</style>