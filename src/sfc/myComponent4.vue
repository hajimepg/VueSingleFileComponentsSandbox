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
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class MyComponent4 extends Vue {
        onButtonClick() {
            this.$emit("event");
        }
    };
</script>
