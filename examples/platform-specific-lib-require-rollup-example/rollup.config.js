import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  input: 'src/index.ts',
  output: { dir: 'dist', format: 'cjs' },
  plugins: [
    nodeResolve(),
    commonjs({ transformMixedEsModules: true }),
    typescript(),
  ],
})
