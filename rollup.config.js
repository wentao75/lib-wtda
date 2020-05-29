import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { name } from "./package.json";

export default {
    input: "src/stockdata-update.js",
    external: [
        "moment",
        "lodash",
        "pino",
        "axios",
        "@wt/lib-wtda-query",
        "@wt/lib-flowcontrol",
        "@wt/lib-tushare",
        "@wt/lib-taskqueue",
        "@babel/runtime",
    ],
    plugins: [
        resolve(),
        babel({
            exclude: "node_modules/**",
            babelHelpers: "runtime",
        }),
        commonjs({
            include: "node_modules/**",
        }),
        terser(),
    ],
    output: [
        {
            file: "stockdata.js",
            format: "umd",
            name,
            sourcemap: true,
        },
        {
            file: "stockdata.esm.js",
            format: "es",
        },
    ],
};
