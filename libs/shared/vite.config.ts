/// <reference types='vitest' />

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/shared',

  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../dist/libs/shared',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: {
        index: 'src/index.ts',
      },
      name: 'shared',
      // Change this to the formats you want to support.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: Object.keys(pkg.peerDependencies).map(
        (key) => new RegExp(`^${key}(/.+)*`),
      ),
    },
  },
  test: {
    globals: true,
    clearMocks: true,
    mockReset: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/shared',
      provider: 'v8',
    },
  },
});
