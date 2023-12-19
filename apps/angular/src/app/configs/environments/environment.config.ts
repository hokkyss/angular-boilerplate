const envConfig = {
  __DEV__: process.env.NODE_ENV === 'development',
} as const;

export default envConfig;
