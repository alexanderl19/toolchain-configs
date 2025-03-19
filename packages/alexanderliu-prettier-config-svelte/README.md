# @alexanderliu/prettier-config-svelte

Prettier config with `package.json` sorting, tabs, Svelte parsing and sorting.

## Usage

### Install Packages

Check package.json package of this package to determine the correct prettier version.

```bash
pnpm add -D -E @alexanderliu/prettier-config-svelte prettier@<version>
```

### Prettier Config

`.prettierrc.js`:

```js
import { alexanderliuPrettierConfigSvelte } from "@alexanderliu/prettier-config-svelte";

export default alexanderliuPrettierConfigSvelte;
```

### `package.json` Scripts

```json
{
    "format:check": "prettier --check .",
    "format:write": "prettier --write .",
}
```
