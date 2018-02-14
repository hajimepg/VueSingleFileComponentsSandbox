<template>
    <p>isEven: {{ isEven }}</p>
</template>

<script lang="ts">
    export default {
        computed: {
            isEven(): string {
                return ((this as any).$store.state.count % 2 === 0) ? "Yes" : "No";
            }
        }
    };
</script>
