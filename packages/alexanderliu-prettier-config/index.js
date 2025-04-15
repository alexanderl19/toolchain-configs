import prettierPluginPackagejson from "prettier-plugin-packagejson";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const alexanderliuPrettierConfig = {
	useTabs: true,
	singleQuote: true,
	printWidth: 100,
	plugins: [prettierPluginPackagejson],
};

export { alexanderliuPrettierConfig };
