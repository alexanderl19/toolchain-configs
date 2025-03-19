# @alexanderliu/prettier-config

Prettier config with `package.json` sorting and tabs.

## Usage

### Install Packages

Check package.json package of this package to determine the correct prettier version.

```bash
pnpm add -D -E @alexanderliu/prettier-config prettier@<version>
```

### Prettier Config

`.prettierrc.js`:

```js
import { alexanderliuPrettierConfig } from "@alexanderliu/prettier-config";

export default alexanderliuPrettierConfig;
```

### `package.json` Scripts

```json
{
    "format:check": "prettier --check .",
    "format:write": "prettier --write .",
}
```
