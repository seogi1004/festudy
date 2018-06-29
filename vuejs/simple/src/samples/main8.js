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
    template: '<button v-on:click="add">{{ counter }}</button>',
    // 4. 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
    // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
    data: function (vueObj) {
        // this.$root는 컴포넌트를 사용하고 있는 vue 객체
        console.log(vueObj == this, this)

        // return data // 사용하는 모든 컴포넌트가 동시에 적용됨
         return { counter : 0 }
    },
    methods: {
        add: function() {
            this.counter++;
        }
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
        title: 'tttt',
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



// [토론 할만한 내용 정리]
//
//
// 1. 컴포넌트의 데이터는 왜 함수일까?
// -> 컴포넌트는 다수의 vue 객체에 의해 사용될 수 있기 때문에 자신을 사용한 root(vue 객체)가 무엇이냐에 따라 분기될 수 있다.
// -> 그렇기 때문에 단순히 데이터를 매핑하는 차원이 아닌 함수를 통한 커스터마이징이 필요한 것이다.
//
// 2. 컴포넌트에서 데이터와 프롭스의 차이?
// -> 컴포넌트의 속성으로 사용된다.
// -> 일단 하위 컴포넌트에 props가 정의되어 있으면, props를 통해 상위 컴포넌트가 데이터를 넘겨 줄 수 있다.
// -> 데이터와 똑같이 this.데이터/프롭스명 형태로 컴포넌트의 템플릿에서 사용된다.
// -> camelCase vs kebab-cas : myMessage[js] == my-message[markup]
//
// 3. 동적 Props (매우 중요, vm4/vm5 객체 선언부 참고)
// -> <child my-message='hihi' /> myMessage라는 컴포넌트 props를 속성으로 사용하면 값이 넘어감.
// -> <child v-bind:my-message='title' /> v-bind를 사용하면 vm객체의 title 데이터와 바인딩함.
// -> v-bind를 사용할 때, 프로퍼티를 다수를 사용할 경우에는 객체 자체를 넣으면 됨. v-bind='todo'
