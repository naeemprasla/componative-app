import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/dist/jq-spa.min.js',
    format: 'umd',
    name: 'JQSPA',
    globals: {
      jquery: '$'
    },
    plugins: [terser()]
  },
  external: ['jquery'],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: false, // Embed CSS in JS
      modules: true,
      inject: true, // Automatically inject styles
      minimize: true
    })
  ]
};