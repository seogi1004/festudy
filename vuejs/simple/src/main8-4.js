import Vue from 'vue'

/* 슬롯 테스트 */

Vue.component('app-content', {
    template: '<div class="app-content">{{ subject }}</div>',
    props: [ 'subject' ]
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

// Vue.component('app-nav', {
//     template: '<div class="app-nav">{{ subject }}</div>',
//     props: [ 'subject' ]
// })

window.vm = new Vue({
    el: '#app',
    data: {
        copyright: '나의 소유자는 vm 객체이다.',
        currentNav: 'app-nav'
    },
    methods: {
        incrementTotal: function () {
            alert('#app handler')
        }
    },
    components: {
        'app-nav': {
            template: '<div class="app-nav">{{ subject }}</div>',
            props: [ 'subject' ]
        },
        'app-nav-another': {
            template: '<div class="app-nav"><h2>{{ subject }}</h2></div>',
            props: [ 'subject' ]
        }
    }
})