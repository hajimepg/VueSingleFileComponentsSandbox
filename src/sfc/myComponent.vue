<template>
    <div>hello from {{ name }} with {{ myMessage }}</div>
</template>

<script lang="ts">
    export default {
        props: ["name", "myMessage"],
    };
</script>
