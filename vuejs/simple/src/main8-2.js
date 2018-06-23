import Vue from 'vue'

/* 사용자 정의 이벤트를 사용하여 폼 입력 컴포넌트 만들기 */

Vue.component('currency-input', {
    template: '\
    <div>\
      <label v-if="label">{{ label }}</label>\
      $\
      <input\
        ref="input"\
        :value="value"\
        @input="updateValue($event.target.value)"\
        @focus="selectAll"\
        @blur="formatValue"\
      >\
    </div>\
  ',
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },
    mounted: function () {
        this.formatValue()
    },
    methods: {
        updateValue: function (value) {
            var result = currencyValidator.parse(value, this.value)
            if (result.warning) {
                // TODO: ref는 무슨 역할?
                this.$refs.input.value = result.value
            }

            // TODO: 이해가 잘 안된다.
            this.$emit('input', result.value)
        },
        formatValue: function () {
            this.$refs.input.value = currencyValidator.format(this.value)
        },
        selectAll: function (event) {
            // Workaround for Safari bug
            // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
            setTimeout(function () {
                event.target.select()
            }, 0)
        }
    }
})
new Vue({
    el: '#app2',
    data: {
        price: 0,
        shipping: 0,
        handling: 0,
        discount: 0
    },
    computed: {
        total: function () {
            return ((
                this.price * 100 +
                this.shipping * 100 +
                this.handling * 100 -
                this.discount * 100
            ) / 100).toFixed(2)
        }
    }
})