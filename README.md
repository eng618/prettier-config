# `@eng618/prettier-config`

> A highly opinionated, yet sensible [Prettier](https://prettier.io) configuration with built-in support for imports organization, package.json sorting, and JSDoc formatting.

[![CI](https://github.com/ENG618/prettier-config/actions/workflows/ci.yml/badge.svg)](https://github.com/ENG618/prettier-config/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@eng618/prettier-config)](https://www.npmjs.com/package/@eng618/prettier-config)
[![license](https://img.shields.io/npm/l/@eng618/prettier-config)](https://github.com/eng618/prettier-config/blob/main/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

## ✨ Features

- **Built-in Plugins**:
  - [`prettier-plugin-organize-imports`](https://github.com/simonhaenisch/prettier-plugin-organize-imports): Automatically sorts and removes unused imports.
  - [`prettier-plugin-packagejson`](https://github.com/matzkoh/prettier-plugin-packagejson): Keeps your `package.json` clean and consistently sorted.
  - [`prettier-plugin-jsdoc`](https://github.com/hosseinmd/prettier-plugin-jsdoc): Formats JSDoc comments for better readability.
- **Sensible Defaults**:
  - `printWidth: 120` for modern screens.
  - `singleQuote: true` for clean JavaScript/TypeScript.
  - `trailingComma: 'all'` for cleaner git diffs.
  - Standardized indentation (2 spaces) and line endings (LF).
- **TypeScript Ready**: Includes full type definitions for IntelliSense.
- **Hybrid Support**: Works with both ESM and CommonJS.

## 🚀 Installation

```bash
# Using npm
npm install --save-dev @eng618/prettier-config prettier

# Using yarn
yarn add --dev @eng618/prettier-config prettier

# Using pnpm
pnpm add --save-dev @eng618/prettier-config prettier
```

> [!TIP]
> All plugins (`organize-imports`, `packagejson`, `jsdoc`) are included as dependencies, so you don't need to install them manually!

## 🛠 Usage

### Simple Setup (package.json)

The easiest way to use this config is by referencing it in your `package.json`:

```json
{
  "name": "my-cool-project",
  "prettier": "@eng618/prettier-config"
}
```

### Advanced Setup (prettier.config.js)

If you need to override or extend the config, create a `prettier.config.js` (or `.prettierrc.js`) file:

#### ES Modules (Recommended)

```javascript
import eng618Config from '@eng618/prettier-config';

/** @type {import('prettier').Config} */
export default {
  ...eng618Config,
  // Your overrides here
  semi: false,
};
```

#### CommonJS

```javascript
const eng618Config = require('@eng618/prettier-config');

/** @type {import('prettier').Config} */
module.exports = {
  ...eng618Config,
  // Your overrides here
  semi: false,
};
```

## 📝 Scripts

Add these to your `package.json` for easy formatting:

```json
"scripts": {
  "format": "prettier --write .",
  "lint:format": "prettier --check ."
}
```

## 📄 License

[MIT](LICENSE) © [Eric N. Garcia](https://garciaericn.com)

---

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ENG618"><img src="https://avatars3.githubusercontent.com/u/3827863?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Garcia</b></sub></a><br /><a href="https://github.com/ENG618/prettier-config/commits?author=ENG618" title="Documentation">📖</a> <a href="https://github.com/ENG618/prettier-config/commits?author=ENG618" title="Code">💻</a> <a href="#infra-ENG618" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
