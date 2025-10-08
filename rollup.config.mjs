import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';

const copyConfig = {
  targets: [
    { src: 'src/styles', dest: 'dist' },
  ],
};

export default [
  // for bundlers
  {
    input: ['dist/components/kemet-*/kemet-*.js'],
    output: [
      { file: 'dist/kemet-components.js', format: 'esm' },
      { file: 'dist/kemet-components.cjs', format: 'cjs' },
    ],
    plugins: [resolve(), commonjs(), multi(), json(), copy(copyConfig)],
  },
  // for browsers
  {
    input: ['dist/components/kemet-*/kemet-*.js'],
    output: [
      {
        file: 'dist/kemet-components.bundle.js',
        name: 'kemet-components',
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), multi(), json(), terser()],
  },
];
