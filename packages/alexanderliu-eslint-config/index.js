module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier',
	],
	rules: {
		'import/export': 2,
		'import/no-named-as-default': 1,
		'import/no-named-as-default-member': 1,
		'import/default': 2,
		'import/namespace': 2,
		'import/no-duplicates': 2,
		'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
		'import/order': [
			'error',
			{
				groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '$app/**',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '$env/**',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '$lib/**',
						group: 'internal',
					},
				],
				distinctGroup: true,
				pathGroupsExcludedImportTypes: ['type'],
			},
		],
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	globals: {
		NodeJS: true,
	},
};
