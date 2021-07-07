module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/components/*.ts',
      './src/components/**/*.ts',
      './src/pages/*.ts',
      './src/pages/**/*.ts',
      './src/app-root.ts',
    ],
  },
};
