import { alexanderliuPrettierConfig } from "@alexanderliu/prettier-config";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const alexanderliuPrettierConfigSvelte = {
	...alexanderliuPrettierConfig,
	plugins: [...alexanderliuPrettierConfig.plugins, "prettier-plugin-svelte"],
	overrides: [
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};

export { alexanderliuPrettierConfigSvelte };
