import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/index.js',
      sourcemap: true,
    },
    {
      format: 'esm',
      file: 'dist/index.esm.js',
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
})
