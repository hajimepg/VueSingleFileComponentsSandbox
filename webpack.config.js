const path = require("path");

module.exports = {
    entry: {
        basic: "./src/basic.ts",
        vuex: "./src/vuex.ts",
        sfc: "./src/sfc/main.ts",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "vuex$": "vuex/dist/vuex.esm.js"
        }
    }
};
