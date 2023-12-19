import type { Plugin } from 'esbuild';

import { resolve } from 'path';
import { loadEnv } from 'vite';

/**
 * To identify NODE_ENV, several different values were checked.
 *
 * `minify`: `false` // this doesn't always exist
 *
 * `minifyIdentifiers`: `false`
 *
 * `minifySyntax`: `false`
 *
 * `minifyWhitespace`: `false`
 *
 * `sourcemap`: `true`
 *
 * `entryNames`: `[name]` instead of `[name]-[hash]`
 *
 * `assetNames`: `media/[name]` instead of `media/[name]-[hash]`
 *
 * `define.ngDevMode` does not exist (as opposed to `false`)
 *
 * @see {@link https://esbuild.github.io/plugins/#build-options ESBuild}
 */
const envPlugin: Plugin = {
  name: 'load-env',
  setup(build) {
    const isProdMode =
      build.initialOptions.minifyIdentifiers &&
      build.initialOptions.minifySyntax &&
      build.initialOptions.minifyWhitespace;

    const isBrowser = build.initialOptions.platform === 'browser';

    const envPrefix = isBrowser ? 'NG_PUBLIC_' : '';
    const env = loadEnv(
      isProdMode ? 'production' : 'development',
      resolve(__dirname, '../..'),
      envPrefix,
    );

    build.initialOptions.define = {
      ...build.initialOptions.define,
      'process.env': JSON.stringify({
        ...env,
        NODE_ENV: isProdMode ? 'production' : 'development',
      }),
    };
  },
};

export default envPlugin;
