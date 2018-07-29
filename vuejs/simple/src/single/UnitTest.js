export default {
    data () {
        return {
            message: 'hello!'
        }
    },
    created () {
        this.message = 'bye!'
    },
    render: function (createElement) {
        return createElement(
            'span',
            this.message
        )
    }
}