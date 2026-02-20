// ESM sharable Prettier config
/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson'],
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
  // Temporarily disabled due to infinite loop bug and greedy formatting
  // TODO: update to balance when when bug fix is published: https://github.com/hosseinmd/prettier-plugin-jsdoc/pull/255
  // jsdocPreferCodeFences: true,
  // jsdocLineWrappingStyle: 'greedy',
  // tsdoc: true,
};

export default config;
