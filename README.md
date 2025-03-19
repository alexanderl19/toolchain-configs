# Toolchain Configs

This repo contains shared configurations for tools used for linting, formatting, etc, and is based on the ["with-changesets" turbo example](https://github.com/vercel/turbo/tree/7a9d83956cc6c0145ed5abdedb2080dec753d09b/examples/with-changesets).

## Packages

- `@alexanderliu/prettier-config`: [Prettier](https://prettier.io) config
- `@alexanderliu/prettier-config-svelte`: [Prettier](https://prettier.io) config with Svelte plugin
- `@alexanderliu/eslint-config`: [Eslint](https://eslint.org) config
- `@alexanderliu/biome-config-linter`: Strict [Biome](https://biomejs.dev) linter config 

## Commands

- `pnpm changeset` - Generate a changeset
- `pnpm format:check` - Check formatting errors for all packages
- `pnpm format:write` - Format all packages
- `pnpm link:check` - Check linting errors for all packages
- `pnpm link:write` - Lint all packages
- `pnpm link:sort` - Sort imports for all packages

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets). Please review their [documentation](https://github.com/changesets/changesets#documentation) to familiarize yourself with the workflow.

This example comes with automated npm releases setup in a [GitHub Action](https://github.com/changesets/action). To get this working, you will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository settings. You should also install the [Changesets bot](https://github.com/apps/changeset-bot) on your GitHub repository as well.

For more information about this automation, refer to the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)
