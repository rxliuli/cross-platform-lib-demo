import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig({
  input: ['src/index.ts', 'src/browser.ts'],
  output: { dir: 'dist', format: 'cjs', sourcemap: true },
  plugins: [typescript()],
})
