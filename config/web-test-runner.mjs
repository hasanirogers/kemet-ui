import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  files: ['src/components/**/test.*'],
  plugins: [esbuildPlugin({ ts: true })],
  nodeResolve: true,
};
