<template>
    <div></div>
</template>
<script>
    const jui = require('juijs-chart')

    export default {
        name: 'graph-column',
        props: {
            labels: {
                type: Array,
                required: true
            },
            values: {
                type: Array,
                required: true
            },
            height: {
                type: Number,
                required: true
            },
            width: {
                type: Number,
                required: true
            }
        },
        methods: {
            convertToData: function(values) {
                var data = [];

                for(var i = 0; i < values.length; i++) {
                    data.push({ value: values[i] });
                }

                return data;
            },
            initChartObject: function(width, height, labels, values) {
                return jui.create("chart.builder", this.$el, {
                    width : width,
                    height : height,
                    axis : [{
                        x : {
                            type : "block",
                            domain : labels,
                            line : true
                        },
                        y : {
                            type : "range",
                            domain : [ -40, 40 ],
                            step : 10,
                            line : true
                        },
                        data : this.convertToData(values)
                    }],
                    brush : [{
                        type : "column",
                        target : [ "value" ]
                    }],
                    render : false
                })
            }
        },
        watch: {
            values: function (newVal, oldVal) { // watch it
                this.$chart.axis(0).update(this.convertToData(newVal));
                this.$chart.render();
            }
        },
        mounted: function(e) {
            this.$chart = this.initChartObject(this.width, this.height, this.labels, this.values);
            this.$chart.render();
        }
    }
</script>