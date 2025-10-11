import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/elements/kemet-*/kemet-*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  target: 'es2020',
  ...options,
}));
