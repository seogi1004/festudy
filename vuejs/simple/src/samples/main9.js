import Vue from 'vue'

new Vue({
    el: '#app',
    data: {
        message: 'Message',
        tail: '.'
    },
    filters: {
        filterA: function(a, b, c) {
            return a + b + c;
        },
        filterB: function(a, b, c) {
            return a + b + c;
        }
    }
});