import Vue from 'vue'
// import App from './App.vue'

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

var obj = {
  foo: 'bar'
}

// Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj,
  methods: {
    onTest: function() {
      this.foo = 'bar2'
    }
  }
})

var data = { message: 'hello!!' }
var vm = new Vue({
  el: '#example',
  data: data,
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  created: function() {
    console.log('a is: ' + this.a)
  },
  mounted: function() {

  },
  updated: function() {

  }
});

console.log(vm.reversedMessage)
vm.message = 'goodbye'
console.log(vm.reversedMessage)

var vm2 = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    styleObject: {
      color: 'red',
      fontSize: 20
    },
    styleObject2: {
      fontWeight: 'bold'
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (nweValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: '질문을 하기 전까지는 대답할 수 없습니다.'
  },
  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    question: function (newQuestion) {
      this.answer = '입력을 기다리는 중...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce는 lodash가 제공하는 기능으로
    // 특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한합니다.
    // 이 경우, 우리는 yesno.wtf/api 에 액세스 하는 빈도를 제한하고,
    // 사용자가 ajax요청을 하기 전에 타이핑을 완전히 마칠 때까지 기다리길 바랍니다.
    // _.debounce 함수(또는 이와 유사한 _.throttle)에 대한
    // 자세한 내용을 보려면 https://lodash.com/docs#debounce 를 방문하세요.
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = '질문에는 일반적으로 물음표가 포함 됩니다. ;-)'
          return
        }
        this.answer = '생각중...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
          })
      },
      // 사용자가 입력을 기다리는 시간(밀리세컨드) 입니다.
      500
    )
  }
})
