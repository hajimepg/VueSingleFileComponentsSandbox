<template>
    <button v-on:click="onButtonClick">click</button>
</template>

<script lang="ts">
    export default {
        methods: {
            onButtonClick() {
                (this as any).$emit("event");
            }
        }
    };
</script>
