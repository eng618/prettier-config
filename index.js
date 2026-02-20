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
  // TODO: update to balance when when bug fix is published: https://github.com/hosseinmd/prettier-plugin-jsdoc/pull/255
  jsdocLineWrappingStyle: 'greedy',
  tsdoc: true,
};

export default config;
