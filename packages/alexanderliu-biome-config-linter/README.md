# @alexanderliu/biome-config-linter

Biome config with strict linter rules.

## Usage

### Install Packages

Check package.json package of this package to determine the correct biome version.

```bash
pnpm add -D -E @alexanderliu/biome-config-linter @biomejs/biome@<version>
```

### Biome Config

`biome.json`:

```json
{
    "extends": ["@alexanderliu/biome-config-linter/biome"]
}
```

### `package.json` Scripts

```json
{
   "format:check": "biome format .",
   "format:write": "biome format --write .",
   "link:check": "biome lint .",
   "link:sort": "biome check --formatter-enabled=false --linter-enabled=false --organize-imports-enabled=true --write .",
   "link:write": "biome lint --write ."
}
```

### (Optional) `package.json` Sort

Biome does not sort `package.json` keys. Replace the follow scripts to use the `sort-package-json` package for this functionality.

#### Install `sort-package-json`

```bash
pnpm add -D -E sort-package-json
```

#### Replace Scripts

```json
{
   "format:check": "pnpm format:package-json --check && biome format .",
   "format:package-json": "sort-package-json 'package.json' 'packages/*/package.json'",
   "format:write": "pnpm format:package-json && biome format --write .",
}
```
