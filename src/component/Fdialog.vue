<template>
   <div class='box'>
     <Dialog v-bind="$attrs" v-on="$listeners" />
     {{$attrs.title}}
   </div>
</template>

<script>
import Dialog from './dialog'
export default {
  props:{

  },
  data() {
//这里存放数据
    return {

    };
  },
  created() {
   },
  mounted() {
   },
  computed: {},
   watch: {},
   methods: {
  
   },
  components: {
    Dialog
  },
}
</script>
<style lang='' scoped>

</style>