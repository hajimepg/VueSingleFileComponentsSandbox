const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
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
