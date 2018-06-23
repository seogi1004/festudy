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

Vue.component('app-view', {
    template: '<div class="app-view"><span>{{ subject }}</span><slot></slot></div>',
    props: [ 'subject' ]
})

Vue.component('app-nav', {
    template: '<div class="app-nav">{{ subject }}</div>',
    props: [ 'subject' ]
})

window.vm = new Vue({
    el: '#app'
})