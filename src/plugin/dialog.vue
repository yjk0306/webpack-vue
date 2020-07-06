<template>
  <transition name="fade">
  <div class='box' v-if="show">
    <transition name="scale">
      <div class="dialog">
          <div class="header">{{title}}</div>
          <div class="content">{{content}}</div>
          <div class="footer">
            <div @click="cancel">取消 </div>
            <div @click="confirm">确定 </div>
          </div>
        </div>
    </transition>
    </div>
  </transition>
  
</template>
<script>
export default {
  data () {
    return {
      show : false,
      title: '标题',
      content : 'message'
    }
  },
  methods :{
    cancel () {
      this.cancelCB('取消')
      this.show = false
    },
    confirm () {
      this.confirmCB()
    },
    open () {
      this.show = true
    },
    close () {
      this.show = false
    }
  },

}
</script>

<style  scoped>
.box{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog{
    position: fixed;
    /* top: 45%; */
    /* left: 50%; */
    text-align: center;
    width: 320px;
    overflow: hidden;
    transform-origin: center;
    font-size: 16px;
    background-color: #fff;
    border-radius: 16px;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
}
.header{
      padding-top: 24px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
}
.content{
      max-height: 60vh;
    padding: 24px;
    overflow-y: auto;
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    text-align: center;
    word-wrap: break-word;
    -webkit-overflow-scrolling: touch;
    border-bottom: 1px solid #e5e5e5;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer>div{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
}
.fade-enter,.fade-leave-to {
  opacity: 0;

}
.fade-enter>.dialog{
  transform: scale(0);
}
.fade-leave-to>.dialog{
  transform: scale(0);
}

.fade-enter-active {
 transition:all  0.4s ;
}
.fade-leave-active {
  transition:all  0.4s ;
  transition-delay: 0.2s;
}
.fade-enter-active > .dialog {
  animation: bounce-in .5s;
}
.fade-leave-active > .dialog {
  transform-origin: center;
  animation: bounce-in .5s reverse;

}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>