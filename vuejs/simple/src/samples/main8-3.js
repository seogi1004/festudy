import Vue from 'vue'

/* v-on을 이용한 사용자 지정 이벤트 */
Vue.component('bs-date-input', {
    // 이게 자식임... 진짜 헷갈림 ㅋㅋ
    template: '<div><input type="date" class="form-control" @click="incrementCounter" /> {{ counter }} ({{ message }})</div>',
    props: [ 'message' ],
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
            // 자식이 부모인 vm 객체로 trigger함.
            this.$emit('increment') // or vm.$children[0].emit("increment")
        }
    },
})
window.vm1 = new Vue({
    el: '#app1',
    data: {
        total: 10,

        // 매우 중요. 컴포넌트의 프롭스와 바인딩함
        parentData: "aa"
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})

/* 컴포넌트의 v-model 사용자 정의 */
// Vue.component('my-checkbox', {
//     template: "<input type='checkbox' />",
//     model: {
//         prop: 'checked',
//         event: 'change'
//     },
//     props: {
//         // 다른 목적을 위해 `value` prop를 사용할 수 있습니다.
//         checked: Boolean,
//         value: String
//     }
// })
// window.vm2 = new Vue({
//     el: '#app2',
//     data: {
//         foo: true
//     }
// })