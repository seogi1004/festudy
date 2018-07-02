import Vue from 'vue'
import GraphLine from './components/line.vue'
import GraphColumn from './components/column.vue'
import WidgetNote from './components/widgets/note.vue'

var VueGraph = {};

VueGraph.install = function(Vue, options) {
    Vue.component(GraphLine.name, GraphLine)
    Vue.component(GraphColumn.name, GraphColumn)

    Vue.component(WidgetNote.name, WidgetNote)
}


Vue.use(VueGraph)
window.vm = new Vue({
    el: "#app",
    data: {
        name : "[Simple Dashboard]",
        labels: [ "1q", "2q", "3q", "4q" ],
        values: [ [ 10, 40, 30 ], [ -20, 10, 30 ], [ -20, 10, 30 ], [ -20, 10, 30 ] ],
        title: "Line Test"
    }
})