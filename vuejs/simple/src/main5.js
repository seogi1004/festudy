import Vue from 'vue'

window.vm1 = new Vue({
  el: '#app1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  methods: {
    gogo: function(d, e) {
      alert(d, e);
    }
  }
})

window.vm2 = new Vue({
  el: '#app2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

window.vm3 = new Vue({
  el: '#app3',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})

window.vm4 = new Vue({
  el: '#app4',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(n) {
        return n % 2 === 0
      })
    }
  }
})

window.vm5 = new Vue({
  el: '#app5',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

window.vm6 = new Vue({
  el: '#app6'
})

window.vm7 = new Vue({
  el: '#app7',
  data: {
    items: [
      {msg: "msg1", isComplete: false },
      {msg: "msg2", isComplete: true }
    ]
  }
})

// 1. 배열 대체
// filter, concat, slice는 네이티브 배열 메소드이다.
// 원형을 변형하지 않고 새로운 배열을 생성한다.

// 2. 배열 바인딩 예외
// (1) 인덱스로 배열에 있는 항목을 직접 설정하는 경우, 예: vm.items[indexOfItem] = newValue
// (1)은 Vue.set(vm1.items, indexOfItem, newValue) 형태로 바인딩 할 수 있음
// (2) 배열 길이를 수정하는 경우, 예: vm.items.length = newLength
// (2)는 vm1.items.splice(newLength)로 바인딩 할 수 있음

// 3. 객체 속성 추가 및 삭제를 감지하지 못함.
// Vue.set 또는 vm1.$set, Object.assign을 사용해야 함.


