import Vue from "vue";
import Vuex from "vuex";

import doubleUp from "./doubleUp.vue";
import isEven from "./isEven.vue";

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
    components: {
        "double-up": doubleUp,
        "is-even": isEven,
    }
});
