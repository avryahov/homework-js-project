import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import generateHtmlTemplate from "rollup-plugin-generate-html-template";
// При установке пришлось задействовать --legacy-peer-deps
// не мог установить, были баги, и предложил менеджер использовать эту опцию


export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.js",
        format: "iife",
    },
    plugins: [
        styles(),
        image(),
        babel({
            babelHelpers: "bundled",
            presets: ["@babel/preset-env"],
        }),
        serve({
            open: true,
            contentBase: "dist",
            port: 3000,
        }),
        livereload("dist"),
        generateHtmlTemplate({
            template: "src/index.html", // Файл-шаблон
            target: "index.html", // Куда сохранить в dist
        }),
    ],
};
