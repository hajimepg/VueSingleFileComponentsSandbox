<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <p>
            <slot>contents</slot>
        </p>
        <footer>
            <slot name="footer"></slot>
        </footer>
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
