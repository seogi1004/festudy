import Vue from 'vue'

window.vm1 = new Vue({
  el: '#app1',
  data: {
    counter: 0
  }
})

window.vm2 = new Vue({
  el: '#app2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function(event) {
      alert('Hello ' + this.name + '!')
      if(event) {
        alert(event.target.tagName)
      }
    }
  }
})

window.vm3 = new Vue({
  el: '#app3',
  methods: {
    say: function(message) {
      alert(message)
    },
    warn: function(message, event) {
      if(event) event.preventDefault()
      alert(message)
    }
  }
})

window.vm4 = new Vue({
  el: '#app4',
  methods: {
    submit: function(event) {
      alert(event.target.value)
    }
  }
})

window.vm5 = new Vue({
  el: '#app5',
  methods: {
    clear: function(e) {
      alert('clear')
    },
    doSomething1: function(e) {
      alert('do1')
    },
    doSomething2: function(e) {
      alert('do2')
    },
    doSomething3: function(e) {
      alert('do3')
    },
    doSomething4: function(e) {
      alert('do4')
    }
  }
})
