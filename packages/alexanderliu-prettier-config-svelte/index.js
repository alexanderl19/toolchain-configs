import { alexanderliuPrettierConfig } from "@alexanderliu/prettier-config";
import prettierPluginSvelte from "prettier-plugin-svelte";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const alexanderliuPrettierConfigSvelte = {
	...alexanderliuPrettierConfig,
	plugins: [...alexanderliuPrettierConfig.plugins, prettierPluginSvelte],
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
