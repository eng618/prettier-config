// ESM sharable Prettier config
/** @type {import('prettier').Config} */
const config = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 120,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides: [
    {
      files: "*.{yml,yaml}",
      options: {
        singleQuote: false,
      },
    },
    {
      files: "*.hbs",
      options: {
        parser: "html",
      },
    },
  ],
};

export default config;
