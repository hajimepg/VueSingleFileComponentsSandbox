const path = require("path");

const resolveConfig = {
    extensions: [".js", ".ts", ".vue"],
    alias: {
        "vue$": "vue/dist/vue.esm.js",
        "vuex$": "vuex/dist/vuex.esm.js"
    }
};

module.exports = [
    {
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
        resolve: resolveConfig
    },
    {
        entry: "./src/vuex.ts",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "vuex.js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader"
                }
            ]
        },
        resolve: resolveConfig
    },
    {
        entry: "./src/sfc/main.ts",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "sfc.js"
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
                    options: {
                        esModule: true
                    }
                }
            ]
        },
        resolve: resolveConfig
    },
];
