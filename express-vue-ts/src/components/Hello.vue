<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'

    @Component
    export default class HelloComponent extends Vue {
        @Prop() name: string;
        @Prop() initialEnthusiasm: number;

        enthusiasm: number = this.initialEnthusiasm;

        get exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }

        increment(): void {
            this.enthusiasm++;
        }

        decrement(): void {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        }
    }
</script>

<style>
    .greeting {
        font-size: 30px;
    }
</style>