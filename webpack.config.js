const path = require("path");

module.exports = {
    entry: "./src/basic.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "basic.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
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
