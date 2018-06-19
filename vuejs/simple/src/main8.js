import Vue from 'vue'

// 1. 전역으로 등록하기
Vue.component('my-component', {
    template: '<div>사용자 정의 컴포넌트이당!</div>'
})
window.vm1 = new Vue({
  el: '#app1'
})

// 2. 지역으로 등록하기
const Child = {
    template: '<div>사용자 정의 컴포넌트이당!</div>'
}
window.vm2 = new Vue({
    el: '#app2',
    components: {
        'my-component': Child
    }
})

// 3. dom 템플릿 구문 분석 경고
// table, ul, ol 같은 태그의 하위 엘리먼트가 컴포넌트로 등록되는 경우 발생
// 일반 마크업에서 사용하면 안됨
// - <script type="text/x-template">
// - Javascript inline template 문자열
// - .vue 컴포넌트
var data = { counter: 0 }
Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
    // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
    data: function () {
        return data // 사용하는 모든 컴포넌트가 동시에 적용됨
         //return { counter : 0 }
    }
})
window.vm3 = new Vue({
    el: '#app3'
})

// Props (myMessage[js] == my-message[markup])
Vue.component('child', {
    props: [ 'myMessage' ],
    template: '<span>{{ myMessage }}</span>'
})
window.vm4 = new Vue({
    el: '#app4',
    data: {
        message: 'hihi'
    }
})
window.vm5 = new Vue({
    el: '#app5',
    data: {
        parentMsg: '하이요!!!'
    }
})

// 동적 Props
Vue.component('todo-item', {
    props: [ 'text', 'isComplete' ],
    template: '<span>{{ text }} ({{ isComplete }})</span>'
})
window.vm6 = new Vue({
    el: '#app6',
    data: {
        todo: {
            text: 'Learn Vue',
            isComplete: false
        }
    }
})
