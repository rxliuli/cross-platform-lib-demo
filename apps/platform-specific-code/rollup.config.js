import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
      chunkFileNames: '[name].js',
    },
    manualChunks(id) {
      if (id.endsWith('NodeAdapter.ts')) {
        return 'adapters/NodeAdapter'
      }
    },
    plugins: [typescript()],
  },
  {
    input: 'src/adapters/BrowserAdapter.ts',
    output: {
      format: 'cjs',
      file: 'dist/adapters/BrowserAdapter.js',
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
        },
      }),
    ],
  },
])
