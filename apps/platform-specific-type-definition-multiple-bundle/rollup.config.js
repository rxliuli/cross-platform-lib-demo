import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      { dir: 'dist/cjs', format: 'cjs', sourcemap: true },
      { dir: 'dist/esm', format: 'esm', sourcemap: true },
    ],
    plugins: [typescript()],
  },
  {
    input: ['src/adapters/BrowserAdapter.ts', 'src/adapters/NodeAdapter.ts'],
    output: [
      { dir: 'dist/cjs/adapters', format: 'cjs', sourcemap: true },
      { dir: 'dist/esm/adapters', format: 'esm', sourcemap: true },
    ],
    plugins: [typescript()],
  },
])
