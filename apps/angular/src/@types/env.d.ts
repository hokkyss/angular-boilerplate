declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * `undefined` in browser
     */
    ANY_OTHER_VARS?: string;

    NG_PUBLIC_PREFIXED_VARIABLE: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}
