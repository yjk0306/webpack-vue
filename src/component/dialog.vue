<template>
  <div>
    <h1 @click="say">{{show}}</h1>
    <h3>{{flag}}</h3>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    show: {
      type: String,
      default: 'showss'
    },
    flag: {
      type: Boolean,
      default: true
    }

  },
  methods: {
    say () {
      this.$emit('say')
    }
  }

}
</script>