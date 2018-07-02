<template>
    <div><slot></slot></div>
</template>
<script>
    import props from './mixins/props.js'
    import methods from './mixins/methods.js'
    import beforeMount from './mixins/beforeMount.js'

    export default {
        name: 'graph-line',
        mixins: [ props, methods, beforeMount ],
        props: {
            shape: {
                type: String,
                required: false,
                default: 'curve'
            }
        },
        watch: {
            width: function(newVal, oldVal) {
                this.$chart.setSize(newVal, this.height);
                this.$chart.render()
            },
            height: function(newVal, oldVal) {
                this.$chart.setSize(this.width, newVal);
                this.$chart.render()
            },
            values: function (newVal, oldVal) { // watch it
                this.$chart.axis(0).update(this.convertToData(newVal));
                this.$chart.render();
            }
        },
        mounted: function() {
            this.$brushes.push({
                type: 'line',
                symbol: this.shape
            });

            this.$chart = this.createBaseChart();
            this.initGraphBrushes();
            this.initGraphWidgets();
            this.$chart.render(true);
        }
    }
</script>