import Vue from "vue";

Vue.component("my-component", {
    props: ["name", "myMessage"],
    template: "<div>hello from {{ name }} with {{ myMessage }}</div>",
});

Vue.component("my-component2", {
    template: "<button v-on:click=\"onButtonClick\">click</button>",
    methods: {
        onButtonClick() {
            this.$emit("event");
        }
    }
});

Vue.component("my-component3", {
    template: `
    <div>
        <h2>subtitle</h2>
        <slot>
            <p>piyopiyo</p>
        </slot>
    </div>
`,
    methods: {
        onButtonClick() {
            this.$emit("event");
        }
    }
});

Vue.component("my-component4", {
    template: `
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
`,
    methods: {
        onButtonClick() {
            this.$emit("event");
        }
    }
});

const app = new Vue({
    el: "#app",
    data: {
        message: "hello from vue",
        inputMessage: "",
        counter: 1,
    },
    methods: {
        eventHandler() {
            this.counter++;
        }
    }
});
