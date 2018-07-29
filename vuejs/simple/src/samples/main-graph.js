import Vue from 'vue'

import GraphBar from '../../node_modules/vue-graph/src/components/bar.js'
import Note from '../../node_modules/vue-graph/src/components/widgets/note.js'

// import VueGraph from 'vue-graph'
// Vue.use(VueGraph);

Vue.component(GraphBar.name, GraphBar);
Vue.component(Note.name, Note);

window.vm = new Vue({
    el: "#app",
    data: {
        foo: 'foo',
        bar: "bar",
        values: [ 10, 5, 5, 5 ]
    }
});