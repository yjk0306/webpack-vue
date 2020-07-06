import Dialog from './dialog.vue'

const DialogPlugin = {
  install (Vue, options = {} ) {
    // Vue.component('Dialog' ,Dialog)
    const DialogController = Vue.extend(Dialog);
    Vue.prototype.$dialog = function(options= {}) {
      console.log(options)
    
      const instance = new DialogController().$mount(document.createElement('div'));
      instance.cancelCB = options.cancelCB
      instance.confirmCB = options.confirmCB
      instance.title = options.title
      instance.content = options.content
      
      document.body.appendChild(instance.$el);
      instance.open()  
      console.log(instance)

    }
  }
}

export default DialogPlugin