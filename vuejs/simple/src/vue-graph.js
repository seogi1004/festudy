import Vue from 'vue'
import GraphLine from './components/line.vue'

var VueGraph = {}

VueGraph.install = function(Vue, options) {
    Vue.component(GraphLine.name, GraphLine);
}
Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        name : "안녕하세요!!!",
        width: 300,
        height: 300,

        labels: [ "1q", "2q", "3q", "4q" ],
        values: [ 40, -20, 10, 30 ],
        labels2: [ "1qq", "2qq", "3qq", "4qq" ],
        values2: [ 10, 10, 10, 10 ]
    }
})