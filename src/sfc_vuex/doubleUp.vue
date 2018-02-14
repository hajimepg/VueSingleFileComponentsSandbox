<template>
    <button v-on:click="doubleUp">Double Up</button>
</template>

<script lang="ts">
    export default {
        methods: {
            doubleUp() {
                (this as any).$store.commit("DOUBLE_UP_COUNTER");
            }
        }
    };
</script>
