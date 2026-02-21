// ESM sharable Prettier config
/** @type {import('prettier').Config} */
const config = {
  plugins: [
    import.meta.resolve('prettier-plugin-organize-imports'),
    import.meta.resolve('prettier-plugin-packagejson'),
    import.meta.resolve('@homer0/prettier-plugin-jsdoc'),
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
