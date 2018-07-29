<template>
    <span>{{ message }}</span>
</template>

<script>
    export default {
        data () {
            return {
                message: 'hello!'
            }
        },
        created () {
            this.message = 'bye!'
        }
    }
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>