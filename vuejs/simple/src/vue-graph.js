import Vue from 'vue'
import GraphLine from './components/line.vue'
import GraphColumn from './components/column.vue'

var VueGraph = {}

VueGraph.install = function(Vue, options) {
    Vue.component(GraphLine.name, GraphLine);
    Vue.component(GraphColumn.name, GraphColumn);
}


Vue.use(VueGraph)

window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        width: 300,
        height: 300,

        labels: [ "1q", "2q", "3q", "4q" ],
        values: [ 40, -20, 10, 30 ],
        values2: [ 40, -20, 10, 30 ]
    }
})