import prettier from "eslint-config-prettier";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

const alexanderliuEslintConfig = (svelteConfig, gitignorePath) =>
	ts.config(
		includeIgnoreFile(gitignorePath),
		js.configs.recommended,
		...ts.configs.recommended,
		{
			plugins: {
				"import-x": importX,
			},
			rules: {
				"import-x/export": "error",
				"import-x/no-named-as-default": "warn",
				"import-x/no-named-as-default-member": "warn",
				"import-x/default": "error",
				"import-x/namespace": "error",
				"import-x/no-duplicates": "error",
				"import-x/consistent-type-specifier-style": [
					"error",
					"prefer-top-level",
				],
				"import-x/order": [
					"error",
					{
						groups: [
							"type",
							"builtin",
							"external",
							"internal",
							"parent",
							"sibling",
							"index",
						],
						"newlines-between": "always",
						pathGroups: [
							{
								pattern: "$app/**",
								group: "external",
								position: "before",
							},
							{
								pattern: "$env/**",
								group: "external",
								position: "before",
							},
							{
								pattern: "$lib/**",
								group: "internal",
							},
						],
						distinctGroup: true,
						pathGroupsExcludedImportTypes: ["type"],
					},
				],
			},
		},
		...svelte.configs.recommended,
		prettier,
		...svelte.configs.prettier,
		{
			languageOptions: {
				globals: { ...globals.browser, ...globals.node },
			},
			rules: { "no-undef": "off" },
		},
		{
			files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
			languageOptions: {
				parserOptions: {
					projectService: true,
					extraFileExtensions: [".svelte"],
					parser: ts.parser,
					svelteConfig,
				},
			},
		},
	);

export { alexanderliuEslintConfig };
