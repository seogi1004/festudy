import Vue from 'vue'

/* v-on을 이용한 사용자 지정 이벤트 */

// 이건 자식
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

// 이게 부모
window.vm = new Vue({
    el: '#app1',
    data: {
        total: 0,

        // 매우 중요. 컴포넌트의 프롭스와 바인딩함
        parentData: "aa"
    },
    methods: {
        incrementTotal: function () {
            this.total += 1
        }
    }
})