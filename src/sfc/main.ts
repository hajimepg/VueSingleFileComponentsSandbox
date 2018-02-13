import Vue from "vue";

import MyComponent from "./myComponent.vue";
import MyComponent2 from "./myComponent2.vue";
import MyComponent3 from "./myComponent3.vue";
import MyComponent4 from "./myComponent4.vue";

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
    },
    components: {
        "my-component": MyComponent,
        "my-component2": MyComponent2,
        "my-component3": MyComponent3,
        "my-component4": MyComponent4,
    },
});
