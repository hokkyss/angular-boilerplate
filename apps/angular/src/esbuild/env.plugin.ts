import type { Plugin } from 'esbuild';

const envPlugin: Plugin = {
  name: 'load-env',
  setup(build) {
    build.initialOptions.define = {
      ...build.initialOptions.define,
      'process.env': JSON.stringify({ FOO: 'bar' }),
    };
  },
};

export default envPlugin;
