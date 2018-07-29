import Hello from './single/Hello.vue'
import UnitTest from './single/UnitTest.vue'
import Vue from 'vue';

new Vue({
    el: '#app',
    components: {
        hello: Hello,
        unittest: UnitTest
    }
})