<template>
    <button v-on:click="doubleUp">Double Up</button>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class DoubleUp extends Vue {
        doubleUp() {
            this.$store.commit("DOUBLE_UP_COUNTER");
        }
    };
</script>
