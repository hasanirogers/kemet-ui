import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';
import { components } from '../package.json';

export default {
  input: components,
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
        { src: components, dest: 'dist/components' },
        { src: 'src/components/**/*.styles.js', dest: 'dist/components' },
      ],
    }),
  ],
};
