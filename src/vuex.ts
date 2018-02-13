import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuexStore = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        INCRIMENT_COUNTER(state) {
            state.count++;
        },
        DOUBLE_UP_COUNTER(state) {
            state.count = state.count * 2;
        }
    },
});

Vue.component("is-even", {
    template: "<p>isEven: {{ isEven }}</p>",
    computed: {
        isEven(): string {
            return (this.$store.state.count % 2 === 0) ? "Yes" : "No";
        }
    },
});

Vue.component("double-up", {
    template: "<button v-on:click=\"doubleUp\">Double Up</button>",
    methods: {
        doubleUp() {
            this.$store.commit("DOUBLE_UP_COUNTER");
        }
    },
});

const app = new Vue({
    el: "#app",
    store: vuexStore,
    computed: {
        count(): number {
            return this.$store.state.count;
        }
    },
    methods: {
        increment() {
            this.$store.commit("INCRIMENT_COUNTER");
        }
    },
});
