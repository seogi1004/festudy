import Vue from 'vue'

Vue.component('anchored-heading', {
    // template: '#anchored-heading-template',
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    render: function(createElement) {
        return createElement(
            'h' + this.level,
            this.$slots.default
        )
    }
})

new Vue({
    el: '#app',
    data: {
        message: 'Message',
        arg2: 'arg2'
    },
    filters: {
        filterA: function(value) {
            return value + "A";
        },
        filterB: function(value) {
            return value + "B";
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        items: [
            { name: "a" },
            { name: "b" },
            { name: "c" }
        ]
    },
    render: function (createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function (item) {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    }
});