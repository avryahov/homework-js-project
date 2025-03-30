import styles from 'rollup-plugin-styles';
import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
        assetFileNames: "[name]-[hash][extname]",
    },
    plugins: [
        styles(),
        image(),
        babel({
            presets: ['@babel/preset-env'],
            exclude: 'node_modules/**',
            babelHelpers: 'bundled'
        }),
        serve({
            open: true,
            port: 3000,
            contentBase: 'src',
        }),
        livereload(),
    ],
};