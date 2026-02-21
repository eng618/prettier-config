// ESM sharable Prettier config
/** @type {import('prettier').Config} */
const config = {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
    'prettier-plugin-sql',
    'prettier-plugin-curly',
    'prettier-plugin-prisma',
    'prettier-plugin-multiline-arrays',
    'prettier-plugin-tailwindcss',
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
