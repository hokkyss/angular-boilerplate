/// <reference types='vitest' />

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: {
        index: 'src/index.ts',
      },
      // Change this to the formats you want to support.
      formats: ['es', 'cjs'],
      name: 'shared',
    },
    outDir: '../../dist/libs/shared',
    reportCompressedSize: true,
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: Object.keys(pkg.peerDependencies).map(
        (key) => new RegExp(`^${key}(/.+)*`),
      ),
    },
  },
  cacheDir: '../../node_modules/.vite/libs/shared',

  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      skipDiagnostics: true,
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  root: __dirname,
  test: {
    cache: {
      dir: '../../node_modules/.vitest',
    },
    clearMocks: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: '../../coverage/libs/shared',
    },
    environment: 'node',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    mockReset: true,
    reporters: ['default'],
  },
});
