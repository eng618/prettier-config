// ESM sharable Prettier config
/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson', 'prettier-plugin-jsdoc'],
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
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
  // Plugin specific options
  jsdocPreferCodeFences: true,
  tsdoc: true,
};

export default config;
