import Vue from 'vue'

/* 슬롯 테스트 */

window.Vue = Vue

Vue.component('app-content', {
    template: '<div class="app-content" @click="clickContent">{{ subject }} [{{ content }}]</div>',
    props: [ 'subject', 'content' ],
    methods: {
        clickContent: function() {
            this.$emit("increment")
        }
    }
})

Vue.component('app-sidebar', {
    template: '<div class="app-sidebar" v-show="isActive">{{ subject }} ({{ description }})</div>',
    props: [ 'subject', 'isActive' ],
    data: function() {
        return {
            description: "c"
        }
    }
})

Vue.component('app-footer', {
    template: '<div class="app-footer">{{ subject }}</div>',
    props: [ 'subject' ]
})

Vue.component('app-view', {
    template: '<div class="app-view"><span>{{ subject }}</span><slot></slot><slot name="footer" text="범위를 가지는 슬롯"></slot></div>',
    props: [ 'subject' ]
})

Vue.component('app-nav', {
    template: '<div class="app-nav">{{ subject }}</div>',
    props: [ 'subject' ]
})

Vue.component('app-nav-another', {
    template: '<div class="app-nav"><h2>{{ subject }}</h2></div>',
    props: [ 'subject' ]
})

window.vm = new Vue({
    el: '#app',
    data: {
        copyright: '나의 소유자는 vm 객체',
        currentNav: 'app-nav',
        contentTotal: '나의 소유자는 vm 객체 123123',

        subjectRoot: "asdfasdfaf"
    },
    methods: {
        incrementTotal: function () {
            alert('나의 소유자는 vm 객체의 메소드!!')
        }
    }
})