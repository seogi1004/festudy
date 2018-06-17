import Vue from 'vue'
// import App from './App.vue'

// })

var vm = new Vue({
  data: {
    foo: 'foo',
    bar: "bar"
  },
  template: '<b>{{ foo }}/{{ bar }}</b>',
  beforeCreate: function() {
    console.log("beforeCreate");
  },
  created: function() {
    console.log("created")
  },
  beforeMount: function() {
    console.log("beforeMount : ", this.$el)
  },
  mounted: function() {
    console.log("mounted : ", this.$el)
  },
  beforeUpdate: function() {
    console.log("beforeUpdate : ", this.foo, this.$el);
  },
  updated: function() {
    console.log("updated : ", this.foo, this.$el)
  },
  beforeDestroy: function() {
    console.log("beforeDestroy : ", this)
  },
  destroyed: function() {
    console.log("destroyed : ", this)
  }
})

vm.$mount("#app");

window.update = function() {
  vm.foo = 'foo 2222';
}

window.destroy = function() {
  vm.$destroy()
}
