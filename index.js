// ESM sharable Prettier config
/** @type {import('prettier').Config} */
const config = {
  plugins: [
    import.meta.resolve('prettier-plugin-organize-imports'),
    import.meta.resolve('prettier-plugin-packagejson'),
    // @homer0/prettier-plugin-jsdoc is disabled: v11.0.2 uses createRequire() on ESM provider
    // files (app.js loadProviders), which Node rejects. Re-enable once a fix is published.
    // Tracking: https://github.com/homer0/prettier-plugin-jsdoc/issues
    import.meta.resolve('prettier-plugin-sh'),
    import.meta.resolve('prettier-plugin-sql'),
    import.meta.resolve('prettier-plugin-curly'),
    import.meta.resolve('prettier-plugin-prisma'),
    import.meta.resolve('prettier-plugin-multiline-arrays'),
    import.meta.resolve('prettier-plugin-tailwindcss'),
  ],
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    // Exclude common build and tooling folders (also works for consumers of this sharable config)
    ...[
      '.next',
      '.husky',
      '.turbo',
      '.vercel',
      '.output',
      '.firebase',
      '.netlify',
      '.expo',
      '.storybook',
      '.cache',
      'out',
      'tmp',
      'temp',
      'logs',
      '.idea',
      '.vscode',
      '.swc',
      '.parcel-cache',
      '.eslintcache',
      '.stylelintcache',
      '.coverage',
      '.nyc_output',
      'node_modules',
      'dist',
      'build',
      '.yarn',
      '.codacy',
      '.DS_Store',
      '.pnp.*',
    ].map((dir) => ({
      files: `${dir}/**/*`,
      excludedFiles: '**',
    })),
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.hbs',
      options: {
        parser: 'html',
      },
    },
    {
      files: 'CHANGELOG.md',
      options: {
        requirePragma: true,
      },
    },
  ],
};

export default config;
