import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/elements/*.ts",
    "src/react/*.ts"
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  target: 'es2020',
  external: [
    'react',
    'react-dom',
    '@lit/react',
  ],
  ...options,
}));
