import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/components/kemet-*/kemet-*.js',
  output: [
    { file: 'dist/kemet-components.js', format: 'esm' },
    { file: 'dist/kemet-components.cjs', format: 'cjs' },
    { file: 'dist/kemet-components.min.js', format: 'esm', plugins: [terser(), minifyHTML()] },
  ],
  plugins: [
    resolve(),
    multi(),
    copy({
      targets: [
        { src: ['src/components/kemet-*/!(demo)', '!**/stories.*', '!**/test.js'], dest: 'dist' },
        { src: 'src/utilities', dest: 'dist' },
        { src: 'src/styles/!(demo)', dest: 'dist' },
      ],
      flatten: false,
    }),
  ],
};
