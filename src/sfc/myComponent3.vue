<template>
    <div>
        <h2>subtitle</h2>
        <slot>
            <p>piyopiyo</p>
        </slot>
    </div>
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
