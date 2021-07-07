/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-babel',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        // cmd: 'postcss src/styles.ts -o build/dist/styles.js',
        cmd: 'echo its lit',
        watch: 'postcss src/styles.ts -o public/dist/styles.js -w',
      },
      '@canarise/snowpack-eslint-plugin',
      {
        globs: ['src/**/*.ts'], // You should provide this
        options: {
          /* any eslint options here */
        },
        formatter: 'stylish',
      },
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
      'snowpack-plugin-minify-html',
      {
        htmlMinifierOptions: {
          sortAttributes: true,
          removeComments: true,
        },
      },
      // 'snowpack-plugin-imagemin',
      // {
      //   /* see "Plugin Options" below */
      //   include: ['**/*.jpg', '**/*.png'],
      //   plugins: [
      //     require('imagemin-mozjpeg')({ quality: 90, progressive: true }),
      //     require('imagemin-optipng')({ optimizationLevel: 7 }),
      //   ],
      // },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
    treeshake: true,
    splitting: true,
  },
  packageOptions: {
    knownEntryOptions: ['@lit/reactive-element/decorators/base.js'],
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    /* ... */
  },
};
