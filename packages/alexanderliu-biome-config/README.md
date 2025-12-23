# @alexanderliu/biome-config-linter

Biome config with strict linter rules.

## Usage

### Install Packages

Check package.json package of this package to determine the correct biome version.

```bash
pnpm add -D -E @alexanderliu/biome-config-linter @biomejs/biome@2.3.10
```

### Biome Config

`biome.json`:

```json
{
    "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
    "extends": ["@alexanderliu/biome-config-linter/biome"],
    "files": {
        "includes": ["**"]
    }
}
```

### `package.json` Scripts

```json
{
    "format:check": "biome format",
    "format:write": "biome format --write",
    "lint:check": "biome check --formatter-enabled=false",
    "lint:write": "biome check --formatter-enabled=false --write"
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
    "format:check": "sort-package-json --check && biome format",
    "format:write": "sort-package-json && biome format --write",
}
```

or (optionally) in a monorepo:

```json
{
    "format:check": "sort-package-json \"package.json\" \"packages/*/package.json\" --check && biome format",
    "format:write": "sort-package-json \"package.json\" \"packages/*/package.json\" && biome format --write",
}
```
